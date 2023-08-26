"use client";

import { Fragment, lazy, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { ShareSocial } from "react-share-social";
import { useRouter, useSearchParams } from "next/navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { articles } from "@/data/data";
import LightTheme from "../theme";
import InputText from "@/app/Component/InputText";
import { stringAvatar } from "@/helper/avatarHelper";
import axios from "axios";
import { format } from "date-fns";
const Footer = lazy(() => import("../../Component/Footer"));
const Navigation = lazy(() => import("../../Component/Navigation"));
const ArticleCardMain = lazy(() => import("../../Component/ArticleCardMain"));

export default function Article() {
  const [article, setArticle] = useState();
  const [relatedArticles, setRelatedArticles] = useState();
  const [comment, setComment] = useState(null);
  const [comments, setComments] = useState(null);
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const index = searchParams.get("index");
  const [localUser, setLocalUser] = useState(null);

  const commentChanged = (e) => {
    setComment(e.target.value);
  };

  const submitComment = async () => {
    const _comment = comment
    setComment(null);
    const { data } = await axios.post("/api/add-comment", {
      comment:_comment,
      article: article.id,
    });
    setComments(data.comments);
  };

  const likeArticle = () => {
    if (liked) {
      localStorage.removeItem(`la${index}`);
    } else {
      localStorage.setItem(`la${index}`, `la${index}`);
    }
    setLiked(!liked);
  };

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");
    setLocalUser(JSON.parse(localUser));

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

    const fetchComments = async () => {
      const { data } = await axios.post("/api/get-comments", {
        article: index,
      });

      setComments(data.comments);
    };

    fetchComments();
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
          <div className="container max-w-screen-lg pt-10 ">
            <Card variant="outlined" sx={{ padding: 5 }}>
              <h1>Comments</h1>
              <br />
              {comments && comments.length > 0 ? (
                <>
                  <div className="w-full">
                    <Grid container spacing={2}>
                      {comments.map((comment) => (
                        <div className="p-5 flex w-full flex-row">
                          <Avatar {...stringAvatar(comment.author)}>
                            {comment.author &&
                              comment.author.substring(0, 1).toUpperCase()}
                          </Avatar>
                          <div className="ml-2 p-2 bg-slate-200 rounded-3xl text-sm">
                            <strong>{comment.author}</strong> ( { format( new Date(comment.sk), "MMM dd, yyyy" ) } )
                            <Divider />
                            {comment.comment}
                          </div>
                        </div>
                      ))}
                    </Grid>
                  </div>
                </>
              ) : (
                <p>No comments yet</p>
              )}
              <Divider />
              <br />
              <br />
              <Grid container>
                <Grid item xs={12} md={6}>
                  {localUser ? (
                    <>
                      <InputText
                        label="Add Comment"
                        maxWidth="100%"
                        placeholder="Write a comment"
                        rows={3}
                        onChange={commentChanged}
                        value={comment || ""}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ textTransform: "none" }}
                        onClick={submitComment}
                      >
                        Submit
                      </Button>
                    </>
                  ) : (
                    <>
                      <p>Please login to comment</p>
                      <Button
                        variant="outlined"
                        sx={{ textTransform: "none" }}
                        onClick={() => router.push("/iteration1/login")}
                      >
                        Login
                      </Button>
                    </>
                  )}
                </Grid>
              </Grid>
            </Card>
          </div>
        </Box>
        {relatedArticles && (
          <Box display="flex" justifyContent="center" alignContent="center">
            <div className="container max-w-screen-lg pt-20 ">
              <h1>Related Articles</h1>
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
