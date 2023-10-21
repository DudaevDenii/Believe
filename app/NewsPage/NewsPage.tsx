"use client";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";
import React from "react";
import { db } from "../config/firebase";

async function NewsPage() {
  const params = useParams();

  const news = await getDocs(collection(db, "Believe"));
  const filteredNews = await news.docs
    .find((el) => el.id === params.id)
    ?.data();
  if (filteredNews) {
    return (
      <div className="p-3 text-center flex justify-center flex-col gap-5">
        <div>
          <h1 className="text-4xl">{filteredNews.title}</h1>
        </div>
        <img
          src={filteredNews.img}
          alt={filteredNews.title}
          className="max-h-50vw"
        />
        <div className="p-5 text-left ">
          <p>{filteredNews.text}</p>
        </div>
        <div>
          <p>Author: {filteredNews.author}</p>
        </div>
      </div>
    );
  }
}

export default NewsPage;
