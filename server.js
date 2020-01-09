require('dotenv').config()
const express = require('express');
const path = require('path');
var request = require('request');
const app = express();
var bodyParser = require('body-parser')

var cors = require('cors')
var port = 5000
// API calls
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

//__________________________________________________________
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
