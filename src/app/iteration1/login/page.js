"use client";

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  ThemeProvider,
} from "@mui/material";
import Navigation from "../../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../../Component/Footer";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useFacebookLogin } from "react-facebook-login-hook";

export default function Login() {
  const router = useRouter();
  const { logIn, getProfile } = useFacebookLogin({
    appId: process.env.NEXT_PUBLIC_FB_APP_ID,
  });

  const loginFb = async () => {
    const response = await logIn();
    const profile = await getProfile();
    console.log("profile", profile);
  };

  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { data } = await axios.post("/api/auth/callback/google", {
        access_token: tokenResponse.access_token,
      });

      if (data.success && data.data) {
        localStorage.setItem("localUser", JSON.stringify(data.data));
        router.push("/iteration1");
      } else {
        addToast({
          message: data.message ?? data.data.message,
          type: "error",
        });
      }
    },
  });

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-sm pt-36 ">
            <Card variant="outlined">
              <CardContent sx={{ paddingLeft: 15, paddingRight: 15, textAlign: "center" }}>
                <p className="text-lg font-bold pb-10">Login</p>
                <Button
                  sx={{ backgroundColor: "#DB4437", color: "white" }}
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  onClick={() => loginGoogle()}
                >
                  Login Using Google
                </Button>
                <Divider sx={{ paddingTop: 5 }} />
                <Button
                  sx={{ backgroundColor: "#4267B2", color: "white" }}
                  fullWidth
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  onClick={() => loginFb()}
                >
                  Login Using Facebook
                </Button>
              </CardContent>
            </Card>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
