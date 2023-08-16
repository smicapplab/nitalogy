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

    console.log("userInfo", userInfo);

    const token = jwt.sign(
      {
        firstName: userInfo.data.given_name,
        lastName: userInfo.data.family_name,
        email: userInfo.data.email,
      },
      process.env.JWT_TOKEN_SECRET,
      {
        expiresIn: "5h",
      }
    );
    const res = await axios.post(
      `${process.env.LAMBDA_URL}/prod/do-login`,
      {
        token: token,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = NextResponse.json({
      success: true,
      data: res.data,
    });

    console.log("token", token);
    console.log("secret", process.env.JWT_TOKEN_SECRET);
    response.cookies.set({
      name: "jwt",
      value: res.data.token,
      httpOnly: true,
      maxAge: 28800,
    });
    return response;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: e });
  }
}
