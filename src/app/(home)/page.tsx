"use client"

import { useEffect, useState } from "react";
import ChatWindow from "./chatWindow";
import Footer from "./footer";
import { TMessage, dummyData } from "../types";
import useStreamResponse from "@/hooks/useStreamResponse";


export default function Home() {
  const[input, setInput] = useState("");
  const [msg, setMsg] = useState<TMessage[]>(dummyData);
  const {startStream, loading, data} = useStreamResponse({ setMsg});

  async function onSubmit() {
    setInput("");
    console.log(input);
    const updatedMsg: TMessage[] = [...msg, {role: "user", content: input}]
    setMsg(updatedMsg);
    try {
      startStream(updatedMsg);
    } catch (error) {
      console.warn(error);
    }
  }


  return (
    <div className="w-full h-full flex justify-center">
      <ChatWindow messages={msg} />
      <Footer input={input} setInput={setInput} onSubmit={onSubmit} />
    </div>
  );
}
