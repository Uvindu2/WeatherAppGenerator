const express = require("express");
const app = express();
const router = express.Router();
const cors = require('cors');
const axios = require('axios');

// Middleware
app.use(cors());
require('dotenv').config();

const apiKey = process.env.API_KEY;

async function generateWeatherData() {
    try {
        const districts = [
            'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya', 'Galle', 'Matara',
            'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', 'Puttalam',
            'Kurunegala', 'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle',
            'Ampara', 'Batticaloa', 'Trincomalee'
        ];
        const weatherDetails = districts.map(district => {
            const temperature = (Math.random() * 10 + 25).toFixed(2);
            const humidity = (Math.random() * 30 + 60).toFixed(2);
            const airPressure = (Math.random() * 25 + 1000).toFixed(2);

            return {
                temperature,
                humidity,
                airPressure,
                district
            };
        });
        const apiUrl = 'https://weathermapbe.onrender.com/api/weather/save';
        //  const apiUrl = 'http://localhost:4000/api/weather/save';
        await axios.post(apiUrl, weatherDetails, {
            headers: {
                'apikey': apiKey   // set api key here
            }
        });

        console.log('Weather data sent to backend service API successfully.');
    } catch (error) {
        console.error('Error sending weather data:', error.message);
    }
    setTimeout(generateWeatherData, 2 * 60 * 1000);
}

generateWeatherData();

module.exports = router;
