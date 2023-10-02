"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Sofia_Sans } from "next/font/google";

const sofia = Sofia_Sans({ subsets: ["latin"], weight: "800" });
export default function ArticleCard({ article }) {
  const router = useRouter();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={7}>
        <img src={article.image} alt={article.title} className="w-full"/>
      </Grid>
      <Grid item xs={12} md={5}>
        <div className={`${sofia.className} text-2xl uppercase pb-3`}>by {article.author}</div>
        <div dangerouslySetInnerHTML={{ __html: article.brief }} />
      </Grid>
    </Grid>
  );

  // return (
  //   <Card variant="outlined">
  //     <CardContent>
  //       <Grid container spacing={2}>
  //         <Grid item xs={12} md={6}>
  //           <CardMedia
  //             component="img"
  //             height="194"
  //             image={article.image}
  //             alt="Paella dish"
  //           />
  //         </Grid>
  //         <Grid item xs={12} md={6}>
  //           <CardHeader
  //             title={article.title}
  //             subheader={
  //               <div className="flex justify-between">
  //                 <span>{article.author}</span>
  //                 <span>{article.date}</span>
  //               </div>
  //             }
  //           />
  //           <CardContent>
  //             <div dangerouslySetInnerHTML={{ __html: article.brief }} />
  //           </CardContent>
  //           <CardActions>
  //             <Button sx={{ textTransform: "none" }}
  //               size="small"
  //               onClick={() =>
  //                 router.push(`/iteration1/article?index=${article.id}`)
  //               }
  //             >
  //               Read More
  //             </Button>
  //           </CardActions>
  //         </Grid>
  //       </Grid>
  //     </CardContent>
  //   </Card>
  // );
}
