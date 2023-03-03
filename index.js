const weatherTable = document.querySelector(".weather-table"),
  locationName = document.querySelector(".location-name"),
  temperature = document.querySelector(".temperature"),
  description = document.querySelector(".description"),
  weatherIcon = document.querySelector(".weather-icon"),
  form = document.getElementById("form"),
  hudimity = document.querySelector(".hudimity");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = document.getElementById("input").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=512d25db93e9715debd640be2dddf60a`
  )
    .then((res) => res.json())
    .then((data) => {
      locationName.innerText = data.name;
      temperature.innerText = parseInt(data.main.temp);
      description.innerText = data.weather[0].description;
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      hudimity.innerText = data.main.humidity;
      if (data.cod === 200) {
        weatherTable.classList.remove("d-none");
      } else {
        weatherTable.classList.add("d-none");
      }
    });
  if (e.target) {
    weatherTable.classList.add("scale-0");
    weatherTable.classList.remove("scale-1");
    setTimeout(() => {
      weatherTable.classList.remove("scale-0");
      weatherTable.classList.add("scale-1");
    }, 500);
  }
});
