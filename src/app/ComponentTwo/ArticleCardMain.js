"use client";
import { Sofia_Sans } from "next/font/google";

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
    <div className="w-full" onClick={() => navigateTo(`/iteration2/article?index=${article.id}`)}>
      <div className="relative grayscale w-full hover:grayscale-0 cursor-pointer">
        <img src={article.image} alt={article.title} className="w-full" />
        <div className="absolute bottom-0 bg-white h-24 opacity-40 w-full"></div>
        <div
          className={`${sofia.className} absolute bottom-0 pl-4 pr-4 pb-5 pt-5h-24 uppercase font-extrabold text-black`}
        >
          {article.title}
        </div>
      </div>
      <div className={`${sofia.className} cursor-pointer`}>READ MORE</div>
    </div>
  );
}
