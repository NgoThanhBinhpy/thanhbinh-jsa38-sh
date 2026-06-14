const demo = document.getElementById("demo");
var weatherObj = {};
async function showWheather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f25dbaf8378e6be6d5a5ce3981edf636`,
  )
    .then((res) => res.json())
    .then((res) => {
      weatherObj = res;
    });
  demo.textContent = weatherObj.weather[0].main;
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showWheather);
}
