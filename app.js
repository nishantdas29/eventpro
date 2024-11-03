const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { exec } = require('child_process');  // Alternative to open

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Root Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html')); // Serves index.html from the public folder
});

// Routes
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.redirect('/home.html');
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  res.redirect('/login.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  exec(`start http://localhost:${PORT}`);  // Opens browser on Windows
});
