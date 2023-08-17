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
import { ShareSocial } from "react-share-social";
import Navigation from "../../Component/Navigation";
import LightTheme from "../theme";
import Footer from "../../Component/Footer";
import { articles } from "@/data/data";
import { useRouter, useSearchParams } from "next/navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArticleCardMain from "@/app/Component/ArticleCardMain";

export default function Article() {
  const [article, setArticle] = useState();
  const [relatedArticles, setRelatedArticles] = useState();
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const index = searchParams.get("index");

  const likeArticle = () => {
    if (liked) {
      localStorage.removeItem(`la${index}`);
    } else {
      localStorage.setItem(`la${index}`, `la${index}`);
    }
    setLiked(!liked);
  };

  useEffect(() => {
    if (index) {
      if (articles[index]) {
        const _article = articles[index];
        setArticle(_article);

        const related = articles.filter((a) => a.section === _article.section);
        setRelatedArticles(related);
      } else {
        router.push(`/iteration1`);
      }
    } else {
      router.push(`/iteration1`);
    }

    const articlesLiked = localStorage.getItem(`la${index}`);
    if (articlesLiked) {
      setLiked(true);
    }
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-36 ">
            {article && (
              <Card variant="outlined" sx={{ paddingLeft: 5, paddingRight: 5 }}>
                <CardContent>
                  <h1 className="text-xl font-bold">{article.title}</h1>
                  <div className="flex place-content-between">
                    <p>by: {article.author}</p>
                    <p>{article.date}</p>
                  </div>
                </CardContent>
                <CardMedia
                  component="img"
                  image={article.image}
                  alt={article.title}
                />
                <CardContent>
                  <ShareSocial
                    url={window.location.href}
                    socialTypes={[
                      "facebook",
                      "twitter",
                      "whatsapp",
                      "linkedin",
                      "telegram",
                      "reddit",
                      "ok",
                      "line",
                    ]}
                    onSocialButtonClicked={(data) => console.log(data)}
                    style={{
                      root: {
                        border: "0px !important",
                        margin: 0,
                      },
                      iconContainer: {
                        backgroundColor: "red",
                      },
                      copyContainer: {
                        display: "none",
                      },
                      title: {
                        display: "none",
                      },
                    }}
                  />

                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                  <div className="pt-16 w-full text-right">
                    <IconButton onClick={likeArticle}>
                      <FavoriteIcon sx={{ color: liked ? "red" : "grey" }} />
                    </IconButton>
                    {liked ? article.likes + 1 : article.likes || 0}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </Box>
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-lg pt-20 ">
            <h1>Comments</h1>
            <p>No comments yet</p>
          </div>
        </Box>
        {relatedArticles && (
          <Box display="flex" justifyContent="center" alignContent="center">
            <div className="container max-w-screen-lg pt-20 ">
              <Grid container spacing={2}>
                {relatedArticles.map((a) => (
                  <Grid item xs={12} md={6} xl={4} key={a.id}>
                    <ArticleCardMain article={a} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Box>
        )}

        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
