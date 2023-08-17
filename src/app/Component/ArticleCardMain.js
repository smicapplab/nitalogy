"use client";

import { stringAvatar } from "@/helper/avatarHelper";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function ArticleCardMain({ article, noContent = false }) {
  const router = useRouter();

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar {...stringAvatar(article.author)}>
            {article.author && article.author.substring(0, 1).toUpperCase()}
          </Avatar>
        }
        title={article.title}
        subheader={article.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={article.image}
        alt={article.title}
      />
      {!noContent && (
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: article.brief }} />
        </CardContent>
      )}
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>{article.likes} likes</div>
        <Button
          sx={{ textTransform: "none" }}
          size="small"
          onClick={() => router.push(`/iteration1/article?index=${article.id}`)}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
