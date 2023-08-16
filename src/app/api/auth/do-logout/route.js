import { checkSession } from "@/helpers/sessionHelper";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    checkSession(req);
    const token = req.cookies.get("jwt").value;
    await axios.post(
      `${process.env.LAMBDA_URL}/prod/do-logout`,
      {
        token: token,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = NextResponse.json({ success: true });
    response.cookies.delete("jwt");
    response.cookies.delete("role");
    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}
