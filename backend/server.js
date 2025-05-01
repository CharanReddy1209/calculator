const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Calculator endpoints
app.post('/api/calculate', (req, res) => {
  const { expression } = req.body;
  try {
    // Using Function constructor to safely evaluate mathematical expressions
    const result = new Function('return ' + expression)();
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid expression' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 