const express = require('express');
const cors = require('cors');
const app = express();


const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: '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',
});


const openai = new OpenAIApi(config);

let bag = [];

app.use(express.json());

// Enable CORS
app.use(
  cors({
    origin: ['http://127.0.0.1:5500', 'null'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

app.get('/', (req, res) => {
  res.send('home page');
});

app.post('/chat', async (req, res) => {
  const payload = req.body.payload;

  try {
    const prompt = `${payload}`;

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 2048,
      temperature: 1,
    });

    const textResponse = response.data.choices[0].text;
    console.log(textResponse);
    bag = textResponse.split(' ');
    res.send({"ans":`${textResponse}`});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(8000, () => {
  console.log('connected to server');
});
