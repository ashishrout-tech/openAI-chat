import { Content } from 'next/font/google';
import {z} from 'zod';

export const messageSchema = z.object({
  role: z.enum(["system", "user", "assistant"]),
  content: z.string()
});

export type TMessage = z.infer<typeof  messageSchema>;

export const dummyData: TMessage[] = [
    { role: "system", content: "You're an helpful assistant. keep the answer simple and brief" },
  ];
  