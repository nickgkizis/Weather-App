# Weather App 🌦️

A simple weather application that allows users to fetch and display real-time weather information for any city using the OpenWeatherMap API.

## Features ✨

- 🌍 **City Search**: Enter any city to retrieve weather data.
- 🌡️ **Weather Details**: Displays temperature, humidity, wind speed, and current weather conditions.
- 🖼️ **Weather Icons**: Dynamically displays weather icons corresponding to the current weather.
- 🛠️ **Error Handling**: Provides clear messages for invalid input or API errors.

## How It Works 🛠️

1. The app uses the OpenWeatherMap **Geocoding API** to fetch the coordinates (latitude and longitude) of the entered city.
2. It then retrieves detailed weather information using the **Weather API** with the coordinates.
3. The data is dynamically displayed, including an appropriate weather icon.

## Tech Stack 🖥️

- **HTML**: Structure of the application.
- **CSS**: Basic styling for a clean and responsive design.
- **JavaScript**: Fetching and displaying data using asynchronous operations.
- **OpenWeatherMap API**: Provides geocoding and weather data.

## Setup ⚙️

1. Clone the repository:
   ```bash
   git clone https://github.com/nickgkizis/Weather-App.git
   
2. Navigate to the project directory:

   ```bash
   cd weather-app

3. Replace the API_KEY variable in script.js with your OpenWeatherMap API key:

   ```bash
   const API_KEY = "your_api_key_here";
