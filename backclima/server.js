const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

// Habilitar CORS para permitir solicitudes desde localhost:8101
app.use(cors({
    origin: ['http://localhost:8101', 'http://localhost:8102', 'http://localhost:8103'],
}));

// API KEY 
const apiKey = '30c2bc33aee72a97cbafd8d77b376813';

// Ruta para obtener datos
app.get('/weather', async (req, res) => {
    try {
        const city = 'Santiago';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        // Realizar solicitud a la API de OpenWeatherMap
        const response = await axios.get(url);
        const data = response.data;

        // Extraer datos
        const weatherData = {
            location: data.name,
            temperature: data.main.temp,
            windSpeed: data.wind.speed,
        };

        // Enviar respuesta JSON con los datos del clima
        res.json(weatherData);
    } catch (error) {
        // Manejar errores
        console.error('Error al obtener los datos del clima:', error.message);
        res.status(500).json({ error: 'Error al obtener los datos del clima' });
    }
});

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de la aplicación de clima');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);

});