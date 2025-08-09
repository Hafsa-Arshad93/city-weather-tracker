 let cityName = document.querySelector(".cityName");
    let btn = document.querySelector(".btn");
    let text = document.querySelector(".weatherText");

    btn.addEventListener("click", weather);

    function weather() {
      const city = cityName.value.trim();
      if (!city) {
        text.textContent = "🌸 Please bloom a city name first 🌸 ";
        return;
      }
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=560dc8bfa2794a7872a2c953177e7dd9&units=metric`)
        .then(function (response) {
       const temp = response.data.main.temp;
       const weatherDesc = response.data.weather[0].description;
       text.textContent = `☀️ ${city.toUpperCase()}: ${weatherDesc}, ${temp}°C`;
        })
        .catch(function (error) {
          text.textContent = "City not found 😕";
        });
    }