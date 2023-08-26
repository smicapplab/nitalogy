import { NextResponse } from "next/server";
import { decodeToken } from "@/helper/sessionHelper";
import { updateOne } from "@/helper/dynamoDb";
import { getGroups } from "../get-groups/route";

export async function POST(request) {
  try {
    const user = decodeToken(request) || {};
    let { group } = await request.json();

    const updated = group.members.filter(
      (member) => member.email !== user.email
    );

    await updateOne({
      tableName: "Nitalogy",
      item: { ...group, members: updated },
    });

    const { discover, myGroups } = await getGroups({ user });
    return NextResponse.json({ success: true, discover, myGroups });
  } catch (err) {
    console.error(err);
  }
}
