import { NextResponse } from "next/server";
import { decodeToken } from "@/helper/sessionHelper";
import { find, updateOne } from "@/helper/dynamoDb";
import { titleToSlug } from "@/helper/stringHelper";

export const getGroups = async ({ user }) => {
  const discover = [];
  const myGroups = [];
  const groups = await find({
    pk: "groups",
    tableName: "Nitalogy",
  });

  let memberEmails = [];

  for (let group of groups.Items) {
    memberEmails = [];

    for (let member of group.members) {
      memberEmails.push(member.email);
    }

    if (memberEmails.includes(user.email)) {
      myGroups.push(group);
    } else {
      discover.push(group);
    }
  }
  return { discover, myGroups };
};

export async function POST(request) {
  try {
    const user = decodeToken(request) || {};
    const { discover, myGroups } = await getGroups({ user });
    return NextResponse.json({ success: true, discover, myGroups });
  } catch (err) {
    console.error(err);
  }
}
