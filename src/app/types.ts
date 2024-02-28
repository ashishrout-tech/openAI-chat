export type TMessage = {
    role: "admin" | "user" | "gpt"| "",
    msg: string
};

export const dummyData: {
    role: "admin" | "user" | "gpt" | "";
    msg: string;
  }[] = [
    { role: "admin", msg: "Welcome, Admin!" },
    { role: "user", msg: "Hello, User!" },
    { role: "gpt", msg: "I am an AI." },
    // Repeat the same pattern to add more items
    { role: "user", msg: "Another user message" },
    { role: "admin", msg: "Another admin message" },
    { role: "gpt", msg: "Another AI message" },
    { role: "admin", msg: "Yet another admin message" },
    { role: "user", msg: "Yet another user message" },
    { role: "gpt", msg: "Yet another AI message" },
    { role: "admin", msg: "Admin message 10" },
    { role: "user", msg: "User message 10" },
    { role: "gpt", msg: "AI message 10" },
    { role: "admin", msg: "Admin message 11" },
    { role: "user", msg: "User message 11" },
    { role: "gpt", msg: "AI message 11" },
    { role: "admin", msg: "Admin message 12" },
    { role: "user", msg: "User message 12" },
    { role: "gpt", msg: "AI message 12" },
    { role: "admin", msg: "Admin message 13" },
    { role: "user", msg: "User message 13" },
    { role: "gpt", msg: "AI message 13" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    { role: "", msg: "" },
    // Add more items as needed
  ];
  