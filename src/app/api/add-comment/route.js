import { NextResponse } from "next/server";
import { decodeToken } from "@/helper/sessionHelper";
import { find, updateOne } from "@/helper/dynamoDb";

export async function POST(request) {
  try {
    const user = decodeToken(request) || {};
    let { comment, article } = await request.json();

    const sk = `id-${article}`

    await updateOne({
      tableName: "Nitalogy",
      item: {
        pk: "comment",
        sk,
        comment,
        author: user.name,
        gsi2: user.email,
        dateSubmitted: new Date().toISOString(),
      },
    });

    const comments = await find({
      tableName: "Nitalogy",
      pk: "comment",
      sk,
    });

    return NextResponse.json({ success: true, comments: comments.Items });
  } catch (err) {
    console.error(err);
  }
}
