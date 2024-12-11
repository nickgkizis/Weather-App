const API_KEY = "d9cf9b5eb43cd8657951b6d576bb7a46"; // Replace with your API key
const fetchWeatherButton = document.getElementById("fetchWeatherButton");
const cityInput = document.getElementById("cityInput");
const errorElement = document.getElementById("error");
const weatherInfo = document.getElementById("weatherInfo");


// Function to display the current day and time
const displayCurrentDateTime = () => {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString(undefined, options); // Formats the date
  const time = now.toLocaleTimeString(); // Formats the time

  // Display the formatted date and time in the placeholder
  const currentDateTimeElement = document.getElementById("currentDateTime");
  currentDateTimeElement.innerHTML = `<p>${date}</p><p>${time}</p>`;
};

// Call the function when the page loads
displayCurrentDateTime();

// Optional: Update time every second
setInterval(displayCurrentDateTime, 1000);


// Function to fetch and display weather data
const fetchWeather = async () => {
  const city = cityInput.value.trim();
  if (!city) {
    errorElement.textContent = "Please enter a valid city name.";
    weatherInfo.innerHTML = "";
    return;
  }

  try {
    errorElement.textContent = ""; // Clear previous errors
    weatherInfo.innerHTML = ""; // Clear previous weather data

    // Step 1: Get coordinates using the Geocoding API
    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );

    if (!geoResponse.ok) {
      throw new Error(
        "Failed to fetch coordinates. Please check the city name."
      );
    }

    const geoData = await geoResponse.json();
    if (geoData.length === 0) {
      throw new Error("No coordinates found for the given city.");
    }

    const { lat, lon } = geoData[0];

    // Step 2: Fetch weather data using the coordinates
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!weatherResponse.ok) {
      throw new Error("Failed to fetch weather data.");
    }

    const weatherData = await weatherResponse.json();

    // Fetch weather condition icon
    const weatherIcon = weatherData.weather[0].icon;

    // Display the weather data with an icon
    weatherInfo.innerHTML = `
      <div class="weather-header">
        <h3>${weatherData.name}</h3>
        <img src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon" class="weather-icon" />
      </div>
      <p class="temperature">Temperature: ${weatherData.main.temp}°C</p>
      <p class="condition">Condition: ${weatherData.weather[0].description}</p>
      <p class="details">
        <span>Humidity: ${weatherData.main.humidity}%</span>
        <span>Wind: ${weatherData.wind.speed} m/s</span>
      </p>
    `;
  } catch (error) {
    errorElement.textContent =
      error.message || "An error occurred while fetching weather data.";
    weatherInfo.innerHTML = "";
  }
};

// Event listener to trigger the weather fetch when the button is clicked
fetchWeatherButton.addEventListener("click", fetchWeather);
