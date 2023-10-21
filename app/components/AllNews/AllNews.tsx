import { TNews } from "@/app/types/TNews";
import React from "react";

function AllNews({ title, author, img }: TNews) {
  return (
    <div className="flex bg-gray-300 dark:bg-gray-900 flex-col items-center sm:flex-row">
      <img src={img} className="w-screen sm:w-72 md:w-96 h-72"></img>
      <div className="flex items-center justify-around w-screen p-6 sm:w-auto sm:flex-col  sm:items-center sm:m-auto">
        <h1 className="text-4xl">{title}</h1>
        Author: {author}
      </div>
    </div>
  );
}

export default AllNews;
