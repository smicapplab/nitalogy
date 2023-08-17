"use client";

import { Fragment, lazy } from "react";

import Navigation from "../Component/Navigation";
import Hero from "../Component/Hero";
import LightTheme from "./theme";
import { Box, Button, Grid, ThemeProvider } from "@mui/material";
import { articles } from "@/data/data";
import ArticleCard from "../Component/ArticleCard";
import ArticleCardMain from "../Component/ArticleCardMain";
const Footer = lazy(() => import("../Component/Footer"));

export default function Home() {

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Hero />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="max-w-screen-lg pt-10 pl-5 pr-5">
            <p>
              At <strong>Behind The Screen Magazine</strong>, we invite you to embark on
              a journey that transcends the boundaries of traditional
              understanding. Our platform is dedicated to shedding light on a
              complex and often misunderstood issue: poverty porn.
            </p>
            <p>
              In a world where information is easily accessible, we recognize
              the power of media in shaping perspectives. However, we also
              acknowledge the pitfalls that come with sensationalized narratives
              that exploit the struggles of the less fortunate for shock value
              or emotional manipulation.
            </p>
            <p>
              Here, we strive for a different approach. Our goal is to foster
              understanding, empathy, and genuine awareness about the realities
              of poverty without exploiting the vulnerable. We believe in
              sharing stories that honor the dignity and resilience of
              individuals facing adversity while promoting informed discussions
              that lead to sustainable solutions.
            </p>
            <p>
              Join us in dismantling the misconceptions surrounding poverty and
              its portrayal. Through thought-provoking articles, respectful
              conversations, and insightful resources, we aim to challenge
              perceptions, inspire change, and encourage a collective effort
              towards a more equitable world.
            </p>
            <p>
              Thank you for being a part of this journey towards compassionate
              awareness. Your engagement and open-mindedness are vital as we
              work together to create a positive impact that extends beyond the
              digital realm.
            </p>
            <div className="text-center w-full pt-11">
              <h1>Latest Articles</h1>
            </div>
            <ArticleCard article={articles[0]} />
            <br />
            <Grid container spacing={1}>
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
            <br />
            <Button variant="outlined" sx={{ textTransform: "none" }}>
              Browse Articles
            </Button>
            <div
              style={{
                color: "#194175",
                width: "100%",
                minHeight: 200,
                paddingTop: 50,
              }}
            ></div>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
