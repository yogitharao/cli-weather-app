const axios = require('axios');

// Get city name from command-line arguments
const city = process.argv[2];

// Validate that a city name was provided
if (!city) {
  console.error('Error: Please provide a city name as an argument.');
  console.error('Usage: node index.js "CityName"');
  process.exit(1);
}

// Function to fetch weather data
async function fetchWeather(cityName) {
  try {
    // Using Open-Meteo API (free, no API key required)
    // First, get the coordinates for the city
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`;
    
    const geoResponse = await axios.get(geoUrl);

    // Check if city was found
    if (!geoResponse.data.results || geoResponse.data.results.length === 0) {
      console.error(`Error: City "${cityName}" not found.`);
      process.exit(1);
    }

    const { latitude, longitude, name, country } = geoResponse.data.results[0];

    // Now fetch weather data using the coordinates
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&temperature_unit=celsius`;
    
    const weatherResponse = await axios.get(weatherUrl);
    const current = weatherResponse.data.current;

    // Map weather codes to descriptions
    const weatherDescriptions = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      71: 'Slight snow',
      73: 'Moderate snow',
      75: 'Heavy snow',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers',
      85: 'Slight snow showers',
      86: 'Heavy snow showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail'
    };

    const weatherDescription = weatherDescriptions[current.weather_code] || 'Unknown';
    const temperature = current.temperature_2m;
    const windSpeed = current.wind_speed_10m;

    // Display weather information
    console.log(`\n╔═══════════════════════════════════════════╗`);
    console.log(`║         Weather in ${name}, ${country}${' '.repeat(Math.max(0, 13 - name.length - country.length))}║`);
    console.log(`╠═══════════════════════════════════════════╣`);
    console.log(`║ Temperature: ${temperature}°C${' '.repeat(Math.max(0, 27 - temperature.toString().length))}║`);
    console.log(`║ Condition: ${weatherDescription}${' '.repeat(Math.max(0, 28 - weatherDescription.length))}║`);
    console.log(`║ Wind Speed: ${windSpeed} km/h${' '.repeat(Math.max(0, 20 - windSpeed.toString().length))}║`);
    console.log(`╚═══════════════════════════════════════════╝\n`);

  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`Error: City "${cityName}" not found.`);
    } else if (error.message === 'Network Error') {
      console.error('Error: Failed to connect to the weather service. Please check your internet connection.');
    } else {
      console.error(`Error: Unable to fetch weather data. ${error.message}`);
    }
    process.exit(1);
  }
}

// Run the application
fetchWeather(city);
