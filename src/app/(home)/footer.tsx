import { Textarea } from "@/components";
import { useEffect, useState } from "react";

interface IProps {
    input: string,
    setInput: React.Dispatch<React.SetStateAction<string>>,
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Footer ({input, setInput, onSubmit}: IProps) {

    return (
        <div className="absolute bottom-4 flex justify-between border-4 border-red-700 h-fit w-3/5">
            <Textarea onChange={(e) => setInput(e.target.value)} 
                placeholder="Type your message here." 
                className=" bg-primary text-white"
                rows={Math.min(input.split('\n').length, 10)}
            />
        </div>
    )
}