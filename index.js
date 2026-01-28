const express = require('express');
const { exec } = require('child_process');
const lodash = require('lodash');
const axios = require('axios');
const app = express();
const port = 3000;

// Fake AWS Key for secret scanning demo
<<<<<<< HEAD
const FAKE_AWS_ACCESS_KEY_ID = 'AKIAFAKE123456789012';
=======
const AWS_ACCESS_KEY_ID = 'AKIAIOSFODNN7EXAMPLE';
>>>>>>> c0ffabd2ad77c2440ed4ea362061edc839080a33

// XSS vulnerability
app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`Hello ${name}!`);
});

// Command Injection vulnerability
app.get('/exec', (req, res) => {
  const cmd = req.query.cmd;
  if (cmd) {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        res.status(500).send(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        res.send(`stderr: ${stderr}`);
        return;
      }
      res.send(`stdout: ${stdout}`);
    });
  } else {
    res.status(400).send('Please provide a command to execute.');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
