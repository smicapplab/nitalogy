import { NextResponse } from "next/server";

export async function POST(req) {
  try {
      const response = NextResponse.json({ success: true });
      response.cookies.delete("jwt");
      return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}
