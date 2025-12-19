const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());

const API_KEY = 'AIzaSyArrsdyZuQmidrfW2ZRyQ4NSZghr0aViOI'; 

app.get('/search', async (req, res) => {
  const { q, pageToken } = req.query;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(q)}&key=${API_KEY}&maxResults=20&pageToken=${pageToken || ''}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'API Error' });
  }
});

app.get('/', (req, res) => res.send("Server is Online!"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
