// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '904a6335dcmsh5d73d9901cdce4fp19adf4jsn476980add346',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(Response => Response.json())
        .then((Response) => {
            console.log(Response);

            // Convert Unix timestamps to 12-hour format with AM/PM
            const sunriseTime = new Date(Response.sunrise * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            const sunsetTime = new Date(Response.sunset * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

            temp.innerHTML = `${Response.temp}°C`;
            temp2.innerHTML = Response.temp;
            feels_like.innerHTML = `${Response.feels_like}°C`;
            humidity.innerHTML = `${Response.humidity}%`;
            humidity2.innerHTML = Response.humidity;
            min_temp.innerHTML = `${Response.min_temp}°C`;
            max_temp.innerHTML = `${Response.max_temp}°C`;
            wind_speed.innerHTML = `${Response.wind_speed}km/h`;
            wind_speed2.innerHTML = Response.wind_speed;
            wind_degrees.innerHTML = `${Response.wind_degrees}°`;
            sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
            sunset.innerHTML = `Sunset: ${sunsetTime}`;
        })
        .catch(err => console.error(err));
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Kolkata");
