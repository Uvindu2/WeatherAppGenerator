const express = require('express');
const { mongo } = require('mongoose');
const app = express();
const mongoose = require("mongoose")
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');


//Routes
const weatherRoutes = require('./routes/weather')

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:Uvindu8800@cluster0.ywbansd.mongodb.net/UV_Fashion?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected!'));

app.use(cors());
app.use('/api/weather', weatherRoutes);

app.get('/', (req, res) => {
    res.send('This is a string output from the API');
});



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});