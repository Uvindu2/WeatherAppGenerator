const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


app.get('/', (req, res) => {
    res.send('This is a string output from the Generator');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});