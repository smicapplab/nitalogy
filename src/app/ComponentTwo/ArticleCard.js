"use client";

import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { Sofia_Sans } from "next/font/google";

const sofia = Sofia_Sans({ subsets: ["latin"], weight: "800" });
export default function ArticleCard({ article }) {
  const router = useRouter();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <div className="relative">
          <img src={article.image} alt={article.title} className="w-full" />
          <div className="absolute bottom-0 pl-4 pr-4 pb-5 pt-5 font-bold text-white bg-black">
            Featured Article
          </div>
        </div>
        <div className={`${sofia.className} text-2xl uppercase`}>
          {article.title}
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={`${sofia.className} text-2xl uppercase pb-3`}>
          by {article.author}
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.brief }} />
        <div
          className={`${sofia.className} text-2xl uppercase pt-8 cursor-pointer`}
          onClick={() => router.push(`/iteration2/article?index=${article.id}`)}
        >
          READ MORE
        </div>
      </Grid>
    </Grid>
  );
}
