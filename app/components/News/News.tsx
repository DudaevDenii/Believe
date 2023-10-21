"use client";
import { auth, db } from "@/app/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";

function News() {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState(
    `${auth.currentUser?.email || "Anonymous"}`
  );
  const believeCollectionRef = collection(db, "Believe");
  async function addNews(e: FormEvent) {
    e.preventDefault();
    if (!auth.currentUser) {
      alert("Login first");
    } else {
      try {
        await addDoc(believeCollectionRef, {
          title: title,
          img: img,
          text: text,
          author: author,
        });
        setImg("");
        setTitle("");
        setText("");
      } catch (err) {
        console.error(err);
      }
    }
  }
  return (
    <form
      className="flex flex-col gap-10 p-10 items-center justify-center"
      onSubmit={(e: FormEvent) => addNews(e)}
    >
      <h1 className="text-4xl">Add your news:</h1>
      <div className="flex flex-col gap-2 p-2 justify-center items-center">
        <label>Image Link:</label>
        <input
          type="text"
          className="w-screen p-4 text-xl focus:outline-none  bg-gray-300 dark:bg-gray-900"
          value={img}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setImg(e.target.value)
          }
          required
        />
      </div>
      <div className="flex flex-col gap-2 p-2 justify-center items-center">
        <label>Title:</label>
        <input
          type="text"
          className="w-screen p-4 text-xl focus:outline-none  bg-gray-300 dark:bg-gray-900"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          required
        />
      </div>
      <div className="flex flex-col gap-2 p-2 justify-center items-center">
        <label>Text:</label>
        <textarea
          value={text}
          className="w-screen h-96 p-4 text-xl focus:outline-none bg-gray-300 dark:bg-gray-900"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
          required
        />
      </div>
      <div className="flex flex-col gap-2 p-2 justify-center items-center">
        <label>Author:</label>
        <input
          type="text"
          className="w-screen p-4 text-xl focus:outline-none  bg-gray-300 dark:bg-gray-900"
          value={author}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAuthor(e.target.value)
          }
          required
        />
      </div>
      <button className="w-screen p-4 text-xl focus:outline-none border-2 border-gray-300 bg-gray-300 dark:border-gray-900 dark:bg-gray-900 hover:bg-transparent dark:hover:bg-gray-700 transition-all">
        Add an news
      </button>
    </form>
  );
}

export default News;
