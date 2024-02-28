import { messageSchema } from "@/app/types";
import openai from "@/lib/openApi";
import { NextApiRequest, NextApiResponse } from "next";

import { z } from "zod";

const schema = z.array(messageSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "POST") return;
    const result = schema.safeParse(req.body);
    
    try {
        if(result.success){
            
            const stream = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: result.data,
                stream: true,
            });
            for await (const chunk of stream) {
                const data = chunk.choices[0]?.delta?.content || "";
                process.stdout.write(chunk.choices[0]?.delta?.content || "");
                res.write(data);
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            res.write("END STREAM");
            await new Promise(resolve => setTimeout(resolve, 100));
            res.end();
            return;
    
        } else {
           
            return res.status(500).json({error: result.error.errors});
        }
    } catch (error: any) {
       
        return res.status(500).json({error: error.message});
    }
}