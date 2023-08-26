import { NextResponse } from "next/server";
import { find } from "@/helper/dynamoDb";

export async function POST(request) {
  try {
    let { article } = await request.json();
    const sk = `id-${article}`;
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
