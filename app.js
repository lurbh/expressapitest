const express = require('express');
const path = require('path');
const cors = require('cors');
const data = require('./data.js');

const app = express();
const port = process.env.PORT || 5500;
app.use(cors()); 

// sendFile will go here
app.get('/', function(req, res) {
  data.LoadAxiosData();
  res.sendFile(path.join(__dirname, '/index.html'));
});

// sample api routes for testing 
app.get('/', (req, res) => { 
  res.json("welcome to our server") 
}); 

app.get('/secret', (req, res) => { 
  const secret = Math.floor(Math.random() * 100) 
  res.json({ secret }) 
}); 


app.listen(port);
console.log('Server started at http://localhost:' + port);



