const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Hello World!"));

app.get('/list-user', (req, res) => res.send("list-user"));

app.get('/create-user', (req, res) => {
    res.send('<h1>Hello nodejs</h1>')
})

app.get('/user/create', (req, res, next) => {
  res.send('Hello sir')   
})

app.get('/user/update', (req, res) => {
  //console.log("hello");
})

// start server
app.listen(port, () => {
  console.log(`My server starting at http://localhost:${port}`);
});
