import { NextResponse } from "next/server";
import { decodeToken } from "@/helper/sessionHelper";
import { find, updateOne } from "@/helper/dynamoDb";

export async function POST(request) {
  try {
    const user = decodeToken(request) || {};
    let { comment, article } = await request.json();

    const pk = `comment-${article}`;
    const sk = new Date().toISOString();

    await updateOne({
      tableName: "Nitalogy",
      item: {
        pk,
        sk,
        comment,
        author: user.name,
        gsi2: user.email,
      },
    });

    const comments = await find({
      tableName: "Nitalogy",
      pk,
    });

    return NextResponse.json({ success: true, comments: comments.Items });
  } catch (err) {
    console.error(err);
  }
}
