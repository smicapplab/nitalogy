import { NextResponse } from "next/server";
import { decodeToken } from "@/helper/sessionHelper";
import { findByIndex } from "@/helper/dynamoDb";

export async function POST(request) {
  try {
    const user = decodeToken(request) || {};
    const { title } = await request.json();
    const group = await findByIndex({
      tableName: "Nitalogy",
      indexName: "gsi2-index",
      query: { gsi2: title },
    });

    console.log({
      tableName: "Nitalogy",
      indexName: "gsi2-index",
      query: { gsi2: title },
    });

    return NextResponse.json({ success: true, group: group.Items[0] });
  } catch (err) {
    console.error(err);
  }
}
