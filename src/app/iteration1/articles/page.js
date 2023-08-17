"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import Navigation from "../../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../../Component/Footer";
import { articles } from "@/data/data";
import ArticleCardMain from "@/app/Component/ArticleCardMain";

export default function Articles() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-36 ">
            <h1>Articles</h1>
            <Grid container spacing={2}>
              {articles.map((article) => (
                <Grid item xs={12} md={6} xl={4} key={article.id}>
                  <ArticleCardMain article={article} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
