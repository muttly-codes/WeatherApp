
const appId = '0ab7938d5212fab3a91087a3352d0fed';


const getDataForCity = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
  .then(response => response.json());


const createCardHtml = (name, main, description, temp, feels_like, temp_min, temp_max, humidity, sunrise, sunset) = `
  <div class="card">
    <div class="card-header"><h3>${name}</h3>
    </div>
    <div class="card-body">
      <p class="card-text">${main}</p>
      <p class="card-text">${description}</p>
      <p class="card-text">${temp}</p>
      <p class="card-text">${feelsLike}</p>
      <p class="card-text">${tempMin}</p>
      <p class="card-text">${tempMax}</p>
      <p class="card-text">${humidity}</p>
      <p class="card-text">${sunrise}</p>
      <p class="card-text">${sunset}</p>
    </div>
  </div>
  `;


// selecting all the things needed
const goButton = document.querySelector('#forecastBtn');
const cityInput = document.querySelector('#userCity');
const weatherContainer = document.querySelector('#weatherReturn');

// event listener for a click event on the "Go!" button
goButton.addEventListener('click', () => {
  // get the city from the input field
  const city = userCity.value;

  // get the weather data for the city
  getDataForCity(city)
    .then(data => {
      const name = data.name;
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const feelsLike = data.main.feels_like;
      const tempMin = data.main.temp_min;
      const tempMax = data.main.temp_max;
      const humidity = data.main.humidity;
      const sunrise = data.sys.sunrise;
      const sunset = data.sys.sunset;
      
      // create the card html
      const createCardHtml = (name, main, description, temp, feels_like, temp_min, temp_max, humidity, sunrise, sunset) = `
      const cardHtml = createCardHtml(name, main, description, temp, feels_like, temp_min, temp_max, humidity, sunrise, sunset);

      // render!
      weatherContainer.innerHTML = cardHtml;
    });
});




/*const apiKey = '0ab7938d5212fab3a91087a3352d0fed'


const getDataForCity = city => fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric')
  .then(response => response.json());


  <div class="card">
    <div class="card-header"><h3>${name}</h3>
    </div>
    <div class="card-body">
      <p class="card-text">${main}</p>
      <p class="card-text">${description}</p>
      <p class="card-text">${temp}</p>
      <p class="card-text">${feelsLike}</p>
      <p class="card-text">${tempMin}</p>
      <p class="card-text">${tempMax}</p>
      <p class="card-text">${humidity}</p>
      <p class="card-text">${sunrise}</p>
      <p class="card-text">${sunset}</p>
    </div>
  </div>
  `;

const goButton = document.querySelector('#submit');
const cityInput = document.querySelector('#city-input')
const weatherContainer = document.querySelector('#weather-container')

goButton.addEventListener('submit', (event) => {
  event.preventDefault();
  let city = cityInput.input.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  )
  /* const city = cityInput.value;
  getDataForCity(city) */
/*    .then((response) => response.json())
    .then(data) => {
      const name = data.name;
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.temp;
      const feelsLike = data.feels_like;
      const tempMin = data.main.temp_min;
      const tempMax = data.main.temp_max;
      const humidity = data.main.humidity;
      const sunrise = data.sys.sunrise;
      const sunset = data.sys.sunset;
      const cardHtml = createCardHtml(name, main, description, temp, feels_like, temp_min, temp_max, humidity, sunrise, sunset);
      weatherContainer.innerHtml = cardHtml;
    });*/
