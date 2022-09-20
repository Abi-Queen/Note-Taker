//create routes front end can request data from
const { notes } = require('./data/notes');

//add npms
const express = require('express');

//instantiate server
const app = express();

//make server listen, add routes
app.get('/api/notes', (req, res) => {
    res.send('Here are some notes');
});

app.listen(3001, () => {
    console.log(`API server now on port 3001`);
});

