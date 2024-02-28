import { Textarea } from "@/components";
import { ArrowUpIcon } from "@/lib/icon";
import { useEffect, useState } from "react";
import { cn } from '../../lib/utils';

interface IProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

export default function Footer({ input, setInput, onSubmit }: IProps) {

  function onEnter(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if(e.key === "Enter" && !e.shiftKey ){
      setInput("");
    }
    if(input.length > 0 && e.key === "Enter" && !e.shiftKey) {
      onSubmit();
    }
  }

  return (
    <div className="absolute bottom-0 w-3/5 bg-primary m-0 p-0">
        <div className="mb-2 w-full flex justify-between h-fit gap-x-1 border border-white/30 focus-within:border-white/50 rounded-2xl px-2 bg-primary pr-4">
            <Textarea
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here."
                className=" bg-primary text-white outline-none border-none focus-visible:border-none focus-visible:ring-0 rounded-2xl text-lg"
                rows={Math.min(input.split("\n").length, 10)}
                value={input}
                onKeyDown={onEnter}
            />
            <button disabled={input.length === 0} 
              className={cn(input.length === 0 ? "bg-[#383838]" : "bg-white","group my-3 rounded-md w-10 h-10 pl-1")}
              onClick={onSubmit}
            >
                <ArrowUpIcon height={30} width={30} className="text-primary" />
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[-0.6rem] transition z-10 absolute text-white bg-black rounded-md p-2 bottom-[5.2rem] left-[51rem] ">
                    Show&nbsp;message
                </span>
            </button>
        </div>
        <div className=" text-white/40 text-sm text-center pb-1">
          ChatGPT can make mistakes. Consider checking important information.
        </div>
    </div>
  );
}
