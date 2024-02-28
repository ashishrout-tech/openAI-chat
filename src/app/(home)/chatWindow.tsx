import React from 'react';
import { TMessage } from '../types';

interface IProps {
    messages: TMessage[] | undefined
}

export default function ChatWindow({messages}: IProps) {
    return (
        <div className=" h-screen w-3/5 border-2 border-red-600 fixed overflow-y-auto no-scrollbar flex flex-col gap-y-2">
            {messages?.map((ele, i) => {
                return (
                    <ChatBox key={i} msg={ele} />
                )
            })}
        </div>
    )
}

const ChatBox = function ({msg}: {msg: TMessage}){
    return (
        <div className='flex flex-col text-xl gap-y-1'>
            {msg.role === "gpt" && (
                <React.Fragment>
                    <div>GPT</div>
                    <div>{msg.msg}</div>
                </React.Fragment>
            )}
            {msg.role !== "gpt" && (
                <React.Fragment>
                    <div>{msg.role}</div>
                    <div>{msg.msg}</div>
                </React.Fragment>
            )}
        </div>
    )
}