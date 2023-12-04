"use client";
import { Sofia_Sans } from "next/font/google";
import { Button } from "@mui/material";

const sofia = Sofia_Sans({ subsets: ["latin"], weight: "800" });

export default function ArticleCardMain({ article, noContent = false }) {
  const navigateTo = (url) => {
    try {
      window.location.href = url;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full" onClick={() => navigateTo(`/iteration3/article?index=${article.id}`)}>
      <div className="relative grayscale w-full hover:grayscale-0 cursor-pointer">
        <img src={article.image} alt={article.title} className="w-full" />
        <div
          className={`${sofia.className} pl-2 pr-2 pb-2 pt-5h-24 uppercase font-extrabold text-black`}
        >
          {article.title}
        </div>
      </div>
      <Button variant="outlined" size="small" sx={{ textTransform: "none" }} >Read More</Button>
    </div>
  );
}
