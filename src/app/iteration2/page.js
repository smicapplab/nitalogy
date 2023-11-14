"use client";

import { Fragment, lazy } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";
import LightTheme from "./theme";
import { articles } from "@/data/data";
import { Saira_Extra_Condensed } from "next/font/google";
import NavigationTwo from "../ComponentTwo/NavigationTwo";

const ArticleCard = lazy(() => import("../ComponentTwo/ArticleCard"));
const ArticleCardMain = lazy(() => import("../ComponentTwo/ArticleCardMain"));
const Footer = lazy(() => import("../ComponentTwo/Footer"));
const saira = Saira_Extra_Condensed({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <NavigationTwo />
        {/* <Hero /> */}
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="max-w-screen-lg pt-20 pl-5 pr-5">
            <div className="relative flex bg-center grayscale hover:grayscale-0">
              <img
                src="/images/hero.gif"
                alt="hero"
                className="w-full max-w-screen-lg "
              />
            </div>
            <Grid container spacing={0}>
              <Grid item xs={12} md={6}>
                <div className="px-4 py-0 w-full sm:text-7xl text-5xl font-bold text-black">
                  <span className={saira.className}>BEHIND</span>
                </div>
                <div className="px-4 py-0 w-full sm:text-7xl text-5xl font-bold text-black">
                  <span className={saira.className}>THE SCREEN</span>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <p className="pt-5 text-right">
                  At <strong>Behind The Screen Magazine</strong>, we invite you
                  to embark on a journey that transcends the boundaries of
                  traditional understanding. Our platform is dedicated to
                  shedding light on a complex and often misunderstood issue:
                  poverty porn.
                </p>
                <p className="text-right">
                  In a world where information is easily accessible, we
                  recognize the power of media in shaping perspectives. However,
                  we also acknowledge the pitfalls that come with
                  sensationalized narratives that exploit the struggles of the
                  less fortunate for shock value or emotional manipulation.
                </p>
              </Grid>
            </Grid>

            <div className="w-full pt-11">
              <h1 className={`${saira.className} text-4xl`}>Latest Articles</h1>
            </div>
            <ArticleCard article={articles[0]} />
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <ArticleCardMain article={articles[1]} noContent={true} />
              </Grid>
              <Grid item xs={12} md={4}>
                <ArticleCardMain article={articles[4]} noContent={true} />
              </Grid>
              <Grid item xs={12} md={4}>
                <ArticleCardMain article={articles[9]} noContent={true} />
              </Grid>
            </Grid>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
