"use client";

import { Fragment, useEffect, useState } from "react";
import { Box, Button, ButtonGroup, Grid, ThemeProvider } from "@mui/material";
import Navigation from "../../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../../Component/Footer";
import { articles } from "@/data/data";
import ArticleCardMain from "@/app/Component/ArticleCardMain";
import { useSearchParams } from "next/navigation";

export default function Articles() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const [articlesToDisplay, setArticlesToDisplay] = useState([]);

  useEffect(() => {
    /** 
      section: "Understanding Poverty Porn"
      sectionId: "understanding-poverty-porn"
    */

    if (section) {
      const sectionArticles = articles.filter(
        (article) => article.sectionId === section
      );
      setArticlesToDisplay(sectionArticles);
    } else {
      setArticlesToDisplay(articles);
    }
  }, [section]);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-36 ">
            <div>
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
              >
                <Button variant="contained" color="primary">One</Button>
                <Button color="secondary">Two</Button>
              </ButtonGroup>
            </div>
            <h1>Articles</h1>
            <Grid container spacing={2}>
              {articlesToDisplay.map((article) => (
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
