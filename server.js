const express = require('express');
const mercury = require('@postlight/mercury-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/parser', async (req, res) => {
  const { url } = req.query;
  try {
    const result = await mercury.parse(url);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to parse article', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Mercury Parser listening on port ${PORT}`);
});
