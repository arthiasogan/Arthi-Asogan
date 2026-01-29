const weatherData = [
    { city: "London", temperature: "15°C", condition: "Cloudy" },
    { city: "Paris", temperature: "18°C", condition: "Sunny" },
    { city: "New York", temperature: "20°C", condition: "Rainy" },
    { city: "Delhi", temperature: "30°C", condition: "Hot" }
];

document.getElementById("getWeatherBtn").addEventListener("click", function () {
    const cityInput = document.getElementById("cityInput").value.trim();
    const weatherResult = document.getElementById("weatherResult");
    const errorMessage = document.getElementById("errorMessage");

    weatherResult.innerHTML = "";
    errorMessage.innerHTML = "";

    
    const result = weatherData.find(
        item => item.city.toLowerCase() === cityInput.toLowerCase()
    );

    if (result) {
        weatherResult.innerHTML = `
            <p><strong>City:</strong> ${result.city}</p>
            <p><strong>Temperature:</strong> ${result.temperature}</p>
            <p><strong>Condition:</strong> ${result.condition}</p>
        `;
    } else {
        errorMessage.innerHTML = "City not found. Please try again.";
    }
});
