"use client"

import { TMessage } from "@/app/types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

interface IProps{
    setMsg: React.Dispatch<React.SetStateAction<TMessage[]>>
}

export default function useStreamResponse ({ setMsg}: IProps) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");

    const {mutate: startStream} = useMutation({
        mutationFn: async (msg: TMessage[]) => {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(msg)
            })

            if(!response.body) {
                throw new Error("Readable is not supported")
            }

            const reader = response.body.getReader();
            return reader;
        },
        onSuccess: (reader) => {
            setLoading(true);
            async function read() {
                const {done, value} = await reader.read();

                if(done) {
                    setLoading(false);
                    return;
                }

                const text = new TextDecoder("utf-8").decode(value);
                if(text.includes("END STREAM")) {
                    setData(text.replace(/.*END STREAM/, ""));
                } else {

                    setMsg(prevMsg => {
                        let lastMessage = prevMsg[prevMsg.length - 1];
                        if (lastMessage.role !== "assistant") {
                            return [...prevMsg, { role: "assistant", content: text }]
                        }

                        let updatedMsg = [...prevMsg];
                        updatedMsg[updatedMsg.length - 1] = {
                          role: "assistant",
                          content: prevMsg[prevMsg.length - 1].content + text
                        };
                        return updatedMsg;
                    });
                }
                read();
            }
            read();
        },
    })

    return { data, loading, startStream};
}