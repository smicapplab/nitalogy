import { NextResponse } from "next/server";
import { decodeToken } from "@/helper/sessionHelper";
import { updateOne } from "@/helper/dynamoDb";
import { getGroups } from "../get-groups/route";

export async function POST(request) {
  try {
    const user = decodeToken(request) || {};
    let { group } = await request.json();

    const updatedMembers = group.members;
    const memEmails = [];
    for (let member of group.members) {
      memEmails.push(member.email);
    }

    if (!memEmails.includes(user.email)) {
      updatedMembers.push({ name: user.name, email: user.email });
    }

    group.members = updatedMembers;
    await updateOne({ tableName: "Nitalogy", item: group });

    const { discover, myGroups } = await getGroups({ user });

    return NextResponse.json({ success: true, discover, myGroups });
  } catch (err) {
    console.error(err);
  }
}
