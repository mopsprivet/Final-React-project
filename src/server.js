const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post('/registration', (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const newUser = { username, email, password };
  users.push(newUser);

  res.json({ message: 'User registered successfully', user: newUser });
});

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
