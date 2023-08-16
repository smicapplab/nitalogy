"use client";

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { Box, Button, Card, CardContent, ThemeProvider } from "@mui/material";
import Navigation from "../../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../../Component/Footer";
import GoogleIcon from "@mui/icons-material/Google";
import { useFacebookLogin } from "react-facebook-login-hook";

export default function Login() {
  const router = useRouter();
  const { logIn, getProfile } = useFacebookLogin({ appId: process.env.NEXT_PUBLIC_FB_APP_ID });

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
      console.log(data);
      if (data.success && data.data && data.data.success) {
        refetchUser();
        router.replace("/");
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
              <CardContent className="pl-36 pr-36 text-center">
                <p className="text-lg font-bold pb-10">Login</p>
                <Button
                  className="bg-red-600 text-white"
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  onClick={() => loginGoogle()}
                >
                  Login Using Google
                </Button>

                <Button
                  className="bg-blue-500 text-white mt-5"
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
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
