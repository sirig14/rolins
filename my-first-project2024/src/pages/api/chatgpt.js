import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'gpt-3.5-turbo', 
          messages: [
            { role: 'system', content: 'Eres un asistente útil.' },
            { role: 'user', content: message },
          ],
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,

        },
        }
      );

      const responseMessage = response.data.choices[0].message.content;
      res.status(200).json({ message: responseMessage });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Algo salió mal con la API de OpenAI' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
