"use client";

import { lazy, useEffect, useState } from "react";
import { Box, Button, Divider, Grid, ThemeProvider } from "@mui/material";
import { ShareSocial } from "react-share-social";
import { useRouter, useSearchParams } from "next/navigation";
import { articles } from "@/data/data";
import LightTheme from "../theme";
import InputText from "@/app/ComponentTwo/InputText";
import axios from "axios";
import { format } from "date-fns";
import { Saira_Extra_Condensed, Sofia_Sans } from "next/font/google";
import NavigationTwo from "@/app/ComponentTwo/NavigationTwo";
const sofia = Sofia_Sans({ subsets: ["latin"], weight: "800" });
const saira = Saira_Extra_Condensed({ subsets: ["latin"], weight: "600" });
const Footer = lazy(() => import("../../ComponentTwo/Footer"));
const ArticleCardMain = lazy(() => import("../../ComponentTwo/ArticleCardMain"));

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
    const _comment = comment;
    setComment(null);
    const { data } = await axios.post("/api/add-comment", {
      comment: _comment,
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
    const localUserStorage = localStorage.getItem("localUser");
    setLocalUser(JSON.parse(localUserStorage));

    if (index) {
      if (articles[index]) {
        const _article = articles[index];
        setArticle(_article);

        const related = articles.filter((a) => a.section === _article.section);
        setRelatedArticles(related);
      } else {
        router.push(`/iteration2`);
      }
    } else {
      router.push(`/iteration2`);
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
      <NavigationTwo />
      <Box display="flex" justifyContent="center" alignContent="center">
        {article && (
          <div className="container max-w-screen-lg pt-36 p-2">
            <div className="w-full relative ">
              <img src={article?.image} alt={article?.title} />
              <div className="absolute bottom-0 px-4 py-0 w-full text-4xl sm:text-6xl font-bold text-black">
                <span className={saira.className}>{article.title}</span>
              </div>
            </div>

            <div className={`${sofia.className} text-2xl uppercase pb-3 pt-5`}>
              by {article.author}
            </div>

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
                  backgroundColor: "transparent",
                  padding: 0,
                  margin: 0,
                },
                iconContainer: {
                  backgroundColor: "red",
                },
                copyContainer: {
                  display: "none",
                  padding: 0,
                  margin: 0,
                },
                title: {
                  display: "none",
                },
              }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <br />
            <Divider />
            <br />
            <br />
            <div className={`${saira.className} text-6xl`}>COMMENTS</div>
            <br />

            {comments && comments.length > 0 ? (
              <>
                <div className="w-full">
                  {comments.map((comment) => (
                    <div className="relative w-full pb-5">
                      <div
                        className={`${sofia.className} absolute text-lg font-extrabold left-0`}
                      >
                        {comment.author}
                      </div>
                      <div className="absolute text-sm text-gray-700 right-0">
                        {format(new Date(comment.sk), "MMM dd, yyyy")}
                      </div>
                      <br />
                      <div>{comment.comment}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>No comments yet</p>
            )}

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
                      color="secondary"
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
                      onClick={() => router.push("/iteration2/login")}
                    >
                      Login
                    </Button>
                  </>
                )}
              </Grid>
            </Grid>
            <br />
            <Divider />
            {relatedArticles && (
              <Box display="flex" justifyContent="center" alignContent="center">
                <div className="container max-w-screen-lg pt-16 pb-10">
                  <div className={`${saira.className} text-6xl`}>
                    RELATED ARTICLES
                  </div>
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
          </div>
        )}
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
