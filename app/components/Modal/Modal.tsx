"use client";
import React from "react";

function Modal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  function closeModal(e: React.MouseEvent) {
    e.stopPropagation();
    onClose;
  }
  return (
    <div
      className={
        isOpen
          ? "w-screen h-screen flex justify-center items-center absolute left-0 top-0 right-0 bottom-0"
          : "hidden"
      }
      onClick={(e: React.MouseEvent) => closeModal(e)}
    >
      <div className="w-96 h-96 bg-gray-300 dark:bg-gray-900 p-8 rounded-xl">
        <div className="float-right cursor-pointer" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </div>
        {title}
        {children}
      </div>
    </div>
  );
}

export default Modal;
