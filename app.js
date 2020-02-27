const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const DB_URL = require('./config/keys').dbURL;

const app = express();

// Instance of application


const PORT = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.listen(PORT,
    () => console.log('Hello express from cs-dev'));




mongoose.connect(DB_URL,  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('DB connected'))
    .catch((err) => console.log('Error connecting DB', err));




app.get('/hello', (req, res) =>{
    res.json({ message: 'Hello Express!'});
})