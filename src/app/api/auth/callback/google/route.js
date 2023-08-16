import axios from "axios";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { access_token } = await req.json();
    const userInfo = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    const data = {
      firstName: userInfo.data.given_name,
      lastName: userInfo.data.family_name,
      email: userInfo.data.email,
    };

    const token = jwt.sign(data, process.env.JWT_TOKEN_SECRET, {
      expiresIn: "5h",
    });

    console.log("token", token);
    console.log("secret", process.env.JWT_TOKEN_SECRET);

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
