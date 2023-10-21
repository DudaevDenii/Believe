import { db } from "@/app/config/firebase";
import { TNews } from "@/app/types/TNews";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import AllNews from "../AllNews/AllNews";
import Link from "next/link";

async function NewsList() {
  const news = await getDocs(collection(db, "Believe"));
  const filteredData: TNews[] = await news.docs.map((el) => ({
    ...el.data(),
    id: el.id,
  }));
  return (
    <div className="flex flex-col gap-10">
      {filteredData.map((el) => (
        <Link key={el.id} href={`/${el.id}`}>
          <AllNews title={el.title} author={el.author} img={el.img} />
        </Link>
      ))}
    </div>
  );
}

export default NewsList;
