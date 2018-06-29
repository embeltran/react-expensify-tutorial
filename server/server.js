const path = require('path');
const express = require('express');
const app = express(); // express application
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; //for heroku - dynamic port

app.use(express.static(publicPath)); // use public directory 

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')); // if page not in public render this
});

app.listen(port, () => {
  console.log('Server is up!'); // start up here
});
