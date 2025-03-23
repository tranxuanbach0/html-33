const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 75,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};
function search() {
    let city = document.getElementById("input").value.trim(); 
    let result = document.getElementById("result"); 

    if (weatherData[city]) {
        let data = weatherData[city]; 
        result.innerHTML = `
            <h2>${city}</h2>
            <p>${data.icon} ${data.description}</p>
            <p>Nhiệt độ: ${data.temperature}°C</p>
            <p>Độ ẩm: ${data.humidity}%</p>
            <p>Tốc độ gió: ${data.windSpeed} km/h</p>
        `;
    } else {
        result.innerHTML = "ko co du lieu"; 
    }
}