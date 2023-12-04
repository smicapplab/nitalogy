"use client";

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Fragment, lazy } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  ThemeProvider,
} from "@mui/material";
import LightTheme from "../theme";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useFacebookLogin } from "react-facebook-login-hook";
import { Saira_Extra_Condensed } from "next/font/google";
import Footer from "../Component/Footer";
import Navigation from "../Component/Navigation";

const saira = Saira_Extra_Condensed({ subsets: ["latin"], weight: "600" });

export default function Login() {
  const router = useRouter();
  const { logIn, getProfile } = useFacebookLogin({
    appId: process.env.NEXT_PUBLIC_FB_APP_ID,
  });

  const loginFb = async () => {
    await logIn();
    const profile = await getProfile();
    const { data } = await axios.post("/api/auth/callback/facebook", {
      name: profile.name,
      email: profile.email,
    });

    if (data.success && data.data) {
      localStorage.setItem("localUser", JSON.stringify(data.data));
      router.push("/iteration3");
    } else {
      addToast({
        message: data.message ?? data.data.message,
        type: "error",
      });
    }
  };

  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { data } = await axios.post("/api/auth/callback/google", {
        access_token: tokenResponse.access_token,
      });

      if (data.success && data.data) {
        localStorage.setItem("localUser", JSON.stringify(data.data));
        router.push("/iteration3");
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
              <CardContent
                sx={{ paddingLeft: 15, paddingRight: 15, textAlign: "center" }}
              >
                <div className="w-full text-4xl md:text-8xl font-bold text-black pb-20">
                  <span className={saira.className}>LOGIN</span>
                </div>
                <Button
                  sx={{
                    backgroundColor: "#DB4437 !important",
                    color: "white !important",
                    height: "80px !important",
                  }}
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  onClick={() => loginGoogle()}
                >
                  Login Using Google
                </Button>
                <Divider sx={{ paddingTop: 5 }} />
                <Button
                  sx={{
                    backgroundColor: "#4267B2 !important",
                    color: "white !important",
                    height: "80px !important",
                  }}
                  fullWidth
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  onClick={() => loginFb()}
                >
                  Login Using Facebook
                </Button>
                <p className="pb-20"></p>
              </CardContent>
            </Card>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
