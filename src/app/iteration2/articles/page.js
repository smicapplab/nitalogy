"use client";

import { Fragment, lazy, useEffect, useState } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";
import LightTheme from "../theme";
import { articles } from "@/data/data";
import ArticleCardMain from "@/app/ComponentTwo/ArticleCardMain";
import { useSearchParams } from "next/navigation";
import { Sofia_Sans } from "next/font/google";

const sofia = Sofia_Sans({ subsets: ["latin"], weight: "800" });
const Footer = lazy(() => import("../../ComponentTwo/Footer"));
const NavigationTwo = lazy(() => import("../../ComponentTwo/NavigationTwo"));
const ArticleNavigation= lazy(() => import("./components/ArticleNavigation"));


const pageTitle = [
  "",
  "<strong>Understanding Poverty Porn</strong> - What is Poverty Porn and what does it do?",
  "<strong>Media Industry Spotlight</strong> -  Media abuse and use of media to promote influencer culture",
  "<strong>Social Justice and Advocacy</strong> - Representations of the marginalized groups that affect them either positively or negatively due to those who either truly advocate for the cause or use this as a means to promote themselves.",
  "<strong>Psychological Impacts</strong> - Psychological impact of the bombarding of media related poverty porn and its widespread effect of compassion fatigue",
  "<strong>Critical Perspectives</strong> - Opinion pieces on poverty porn regarding recent events and other portrayals that exploit the marginalized groups for clicks and views",
];

let sections = [];
let options = [
  {
    sectionId: "All",
    section: "All",
    url: `/iteration2/articles`,
  },
];

articles.forEach((article) => {
  if (!sections.includes(article.sectionId)) {
    options.push({
      sectionId: article.sectionId,
      section: article.section,
      url: `/iteration2/articles?section=${article.sectionId}`,
    });
    sections.push(article.sectionId);
  }
});

export default function Articles() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const [articlesToDisplay, setArticlesToDisplay] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (section) {
      const sectionArticles = articles.filter(
        (article) => article.sectionId === section
      );
      setArticlesToDisplay(sectionArticles);
      let index = 0;
      for (let option of options) {
        if (option.sectionId === sectionArticles[0].sectionId) {
          setSelectedIndex(index);
          break;
        }
        index++;
      }
    } else {
      setArticlesToDisplay(articles);
      setSelectedIndex(0);
    }
  }, [section]);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <NavigationTwo />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-36 p-2">
            <div className="flex justify-end pb-10">
              <ArticleNavigation
                options={options}
                selectedIndex={selectedIndex}
              />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: pageTitle[selectedIndex] }}
              className={`${sofia.className} text-2xl pb-5`}
            />
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
