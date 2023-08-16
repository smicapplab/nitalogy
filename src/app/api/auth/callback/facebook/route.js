import axios from "axios";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { name, email } = await req.json();
    const data = {
      name,
      email,
    };

    const token = jwt.sign(data, process.env.JWT_TOKEN_SECRET, {
      expiresIn: "5h",
    });

    let response = NextResponse.json({
      success: true,
      data,
    });

    response.cookies.set({
      name: "jwt",
      value: token,
      httpOnly: true,
      maxAge: 28800,
    });

    return response;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: e });
  }
}
