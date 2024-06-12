const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: apiKey,
});



async function main() {
  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    messages: [{ role: "user", content: "Say this is a test" }],
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
}


main();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/chat', (req, res) => {
  res.send('Hello World');
});
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
