const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware, whatever comes through, passes through app.use() first
// If you want to access req.body, you need to use another middleware
app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log(req.body);

  const color = {
    hex: '#fffff',
    hue: 0.71,
    saturation: 0.32
  }

  res.send(color);
});

app.post('/singlecolor', (req, res) => {

  let result = {
    success: true
  }
  
  res.send(result);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('started listening on port 3000');
})