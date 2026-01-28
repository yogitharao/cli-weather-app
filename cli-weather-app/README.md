# CLI Weather App

A command-line application that fetches and displays real-time weather information for any city in the world.

## Features

- **Real-time Weather Data**: Fetches current weather conditions using the Open-Meteo API
- **Multiple Weather Details**: Displays temperature, weather condition, and wind speed
- **Global City Support**: Works with cities worldwide
- **Error Handling**: Gracefully handles invalid cities and network errors
- **Beautiful CLI Output**: Formatted output with ASCII borders for better readability

## Requirements

- Node.js (v12 or higher)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cli-weather-app.git
   cd cli-weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Run the application with a city name as an argument:

```bash
node index.js "London"
```

### Example Output

```
╔═══════════════════════════════════════════╗
║         Weather in London, United Kingdom║
╠═══════════════════════════════════════════╣
║ Temperature: 5.8°C                        ║
║ Condition: Partly cloudy               ║
║ Wind Speed: 3.1 km/h                 ║
╚═══════════════════════════════════════════╝
```

### Using npm start

You can also use the npm start script:

```bash
npm start "Paris"
```

## API

This application uses the **Open-Meteo API**, a free, open-source weather API that requires no authentication:

- **Geocoding API**: To find city coordinates
- **Weather API**: To fetch current weather conditions

### Why Open-Meteo?

- ✅ Free and open-source
- ✅ No API key required
- ✅ Comprehensive weather data
- ✅ Global coverage
- ✅ Reliable and fast

## Error Handling

The application handles various error scenarios:

1. **No city argument provided**:
   ```
   Error: Please provide a city name as an argument.
   Usage: node index.js "CityName"
   ```

2. **Invalid city name**:
   ```
   Error: City "InvalidCity" not found.
   ```

3. **Network errors**:
   ```
   Error: Unable to fetch weather data. [Error details]
   ```

## Project Structure

```
cli-weather-app/
├── index.js          # Main application file
├── package.json      # Project configuration and dependencies
├── package-lock.json # Locked dependency versions
└── README.md         # This file
```

## Technologies Used

- **Node.js**: JavaScript runtime
- **Axios**: HTTP client for API requests
- **Open-Meteo API**: Free weather data provider

## Development Workflow

This project was built using GitHub Copilot as a co-pilot to:

1. **Scaffold the project**: Suggested project structure and dependencies
2. **Generate functions**: Helped create the weather fetching logic
3. **Suggest APIs**: Recommended Open-Meteo as a free, no-auth-required API
4. **Debug and optimize**: Provided error handling and formatting enhancements

## Testing

Test the application with various cities:

```bash
# Valid cities
node index.js "London"
node index.js "New York"
node index.js "Tokyo"
node index.js "Paris"

# Invalid input
node index.js "InvalidCityName"
node index.js  # No arguments (should show usage)
```

## Future Enhancements

- [ ] Add support for temperature unit preferences (Celsius/Fahrenheit)
- [ ] Display 5-day forecast
- [ ] Add support for city search (when multiple matches)
- [ ] Cache weather data for repeated queries
- [ ] Add unit tests
- [ ] Create a config file for default preferences

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Built with GitHub Copilot as a collaborative co-pilot.
