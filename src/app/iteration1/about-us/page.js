"use client";

import { Fragment, lazy, useEffect } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";
import LightTheme from "../theme";
import { Saira_Extra_Condensed } from "next/font/google";

const saira = Saira_Extra_Condensed({ subsets: ["latin"], weight: "600" });
const Footer = lazy(() => import("../../Component/Footer"));
const Navigation = lazy(() => import("../../Component/Navigation"));

export default function AboutUs() {
  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-xl pt-36 ">
            <div className="px-4 py-0 w-full text-4xl md:text-8xl font-bold text-black">
              <span className={saira.className}>
                ABOUT BEHIND THE SCREEN MAGAZINE
              </span>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <img
                  src="/images/about.gif"
                  alt="About Us 1"
                  className="w-full"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <h1 className={`${saira.className} text-2xl`}>About The Website</h1>
                <p>
                  Welcome to Behind The Screen Magazine, a dedicated platform
                  that aims to shed light on the controversial and often
                  misunderstood concept of poverty porn. Our platform was
                  founded with a deep commitment to raising awareness, promoting
                  critical discourse, and driving positive change in the realm
                  of media representation.
                </p>
                <h1 className={`${saira.className} text-2xl`}>Meet The Team</h1>
                <p>
                  Beanca Torrefranca is a student at DLSU-CSB under the MMA
                  course, and the artist for the e-magazine.{" "}
                </p>
                <h1>Mission</h1>
                <p>
                  Our mission is to raise awareness and foster understanding
                  about the concept of "poverty porn." We aim to provide
                  comprehensive and well-researched information to empower
                  individuals, communities, and media creators to recognize,
                  critique, and address the ethical issues associated with
                  poverty porn. Through our platform, we strive to spark
                  meaningful conversations and promote responsible storytelling
                  that respects the dignity and humanity of marginalized
                  populations.
                </p>
                <h1 className={`${saira.className} text-2xl`}>Vision</h1>
                <p>
                  Our vision is a world where media representation is both
                  impactful and respectful, where the narratives of individuals
                  facing poverty and adversity are shared in a way that doesn't
                  exploit their circumstances. We envision a society that
                  acknowledges the harm caused by poverty porn and actively
                  seeks alternatives that amplify authentic voices and stories.
                  Through our efforts, we aspire to create a positive shift in
                  media culture, where empathy, education, and ethical
                  storytelling replace harmful stereotypes and exploitation.
                </p>
              </Grid>
            </Grid>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
