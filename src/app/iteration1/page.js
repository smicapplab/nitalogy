"use client";

import { Fragment, lazy } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";
import LightTheme from "./theme";
import { articles } from "@/data/data";
import { Saira_Extra_Condensed } from "next/font/google";

const ArticleCard = lazy(() => import("../Component/ArticleCard"));
const ArticleCardMain = lazy(() => import("../Component/ArticleCardMain"));
const Navigation = lazy(() => import("../Component/Navigation"));
const Footer = lazy(() => import("../Component/Footer"));
const saira = Saira_Extra_Condensed({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        {/* <Hero /> */}
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="max-w-screen-lg pt-20 pl-5 pr-5">
            <div className="relative flex bg-center grayscale hover:grayscale-0">
              <img
                src="/images/banner1.png"
                alt="hero"
                className="w-full max-w-screen-lg "
              />
              <div className="absolute bottom-0 px-4 py-0 w-full text-9xl font-bold text-white">
                <span className={saira.className}>BEHIND</span>
              </div>
            </div>
            <Grid container spacing={0}>
              <Grid item xs={12} md={6}>
                <div className="px-4 py-0 w-full text-9xl font-bold text-black">
                  <span className={saira.className}>THESCREEN</span>
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
              <h1 className={`${saira.className} text-5xl`}>Latest Articles</h1>
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
