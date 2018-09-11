require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('ZA World!'));
app.get('/oraora', (req, res) => res.send('MUDA MUDA MUDA!'));
app.listen(port, () => console.log(`Example app listening on port ${ port }!`));

module.exports = app;