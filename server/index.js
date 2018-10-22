require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const massive = require('massive');

const port = process.env.PORT || 3001;
const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(err => console.log(err));

app.listen(port, console.log(`Listening on port: ${port}`));