"use client"

import { useState } from "react";
import ChatWindow from "./chatWindow";
import Footer from "./footer";
import { TMessage, dummyData } from "../types";


export default function Home() {
  const[input, setInput] = useState("");
  const [msg, setMsg] = useState<TMessage[]>(dummyData);

  function onSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <div className="w-full h-full flex justify-center">
      <ChatWindow messages={msg} />
      <Footer input={input} setInput={setInput} onSubmit={onSubmit} />
    </div>
  );
}
