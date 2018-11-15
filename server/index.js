require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const massive = require('massive');
const session = require('express-session');

const port = process.env.PORT || 3001;
const app = express();
const endpoints = require('./endpoints');

app.use(json());
app.use(cors());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1223334444
  }
}));

massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(err => console.log(err));

endpoints(app);

app.listen(port, console.log(`Listening on port: ${port}`));