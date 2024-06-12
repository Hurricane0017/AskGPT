import OpenAI from "openai";

export async function sendMessage(prompt:string) {
  const apiKey = process.env.OPENAI_API_KEY;

  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    messages: [{ role: "user", content: prompt }],
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
}

export async function previousChats() {}

export async function deleteTodoById(id: string) {}

export async function updateTodoById(id: string, completed: boolean) {}
