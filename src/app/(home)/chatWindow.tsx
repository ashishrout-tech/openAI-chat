import React, { useEffect, useRef } from 'react';
import { TMessage } from '../types';

interface IProps {
    messages: TMessage[] | undefined
}

export default function ChatWindow({messages}: IProps) {
    const scrollablePaper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function scrollToBottom() {
            if(scrollablePaper.current) {
                scrollablePaper.current.scrollTop = scrollablePaper.current.scrollHeight;
            }
        }
        messages?.length !== undefined && messages.length > 1 && scrollToBottom();

    }, [messages])

    return (
        <div className=" h-screen w-3/5 fixed overflow-y-auto no-scrollbar flex flex-col gap-y-10 pl-6"
            ref={scrollablePaper}
        >
            {messages?.map((ele, i) => {
                return (
                    <ChatBox key={i} msg={ele} />
                )
            })}
            {messages?.length === 1 && (
                <div className=' w-full h-full text-center text-2xl font-bold flex justify-center items-center'>How can I help you today?</div>
            )}
            <span className='py-20' />
        </div>
    )
}

const ChatBox = function ({msg}: {msg: TMessage}){
    return (
        <div className='flex flex-col text-xl gap-y-1'>
            {msg.role === "assistant" && (
                <div className=' text-green-600 font-bold text-2xl'>GPT</div>
            )}
            {msg.role === "user" && (
                <div className=' text-red-600 font-bold text-2xl'>USER</div>
            )}
            { msg.role !== "system" &&
                <pre className='pl-6 text-wrap'>
                    {msg.content}
                </pre>
            }
        </div>
    )
}