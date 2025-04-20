const express = require('express');
const cors = require('cors');
const path = require('path');
const { calculator } = require('./index');

const app = express();
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/api/calculate', (req, res) => {
  const { a, b, operation } = req.body;
  try {
    const result = calculator(a, b, operation);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
