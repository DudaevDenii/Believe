"use client";
import React, { FormEvent, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Modal from "@/app/components/Modal/Modal";
import { auth } from "@/app/config/firebase";
function Email() {
  async function singUp(e: FormEvent) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setModalOpen(false);
    } catch (err) {
      alert("The account with this email already exists");

      console.error(err);
    }
  }
  function singIn(e: FormEvent) {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password);
      setModalOpen(false);
      setEmail("");
      setPassword("");
    } catch (err) {
      alert("The account with this email does not exist");

      console.error(err);
    }
  }
  const [sign, setSign] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
        </svg>
      </button>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Email"
      >
        {sign ? (
          <form
            className="flex justify-center items-center gap-5 derect flex-col m-10"
            onSubmit={(e: FormEvent) => singIn(e)}
          >
            <input
              type="email"
              className="rounded-xl p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="rounded-xl p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              min="6"
              minLength={6}
              required
            />
            <button className="border-gray-600 border-2 px-8 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-800 transition-all">
              Sing in
            </button>
            <button type="button" onClick={() => setSign(false)}>
              I don`t have an account
            </button>
          </form>
        ) : (
          <form
            className="flex justify-center items-center gap-5 derect flex-col m-10"
            onSubmit={(e: FormEvent) => singUp(e)}
          >
            <input
              type="email"
              className="rounded-xl p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="rounded-xl p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              min="6"
              minLength={6}
              required
            />
            <button className="border-gray-600 border-2 px-8 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-800 transition-all">
              Sing up
            </button>
            <button type="button" onClick={() => setSign(true)}>
              I have an account
            </button>
          </form>
        )}
      </Modal>
    </>
  );
}

export default Email;
