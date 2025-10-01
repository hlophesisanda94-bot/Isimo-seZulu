function refreshWeather(response) {
  let tempratureElement = document.querySelector("#temprature");
  temprature = response.data.temprature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement=document.querySelector("#description");
  let humidityElement=document.querySelector("#humidity");
  let windSpeedElement=document.querySelector("#wind-speed");
  let timeElement=document.querySelector("#time");
  let date=new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML=response.data.condition.description;
  humidityElement.innerHTML=`${response.data.temprature.humidity}%`;
  windSpeedElement.innerHTML=`${response.data.wind.speed}km/h`;
  timeElement.innerHTML= formatDate(date);
  tempratureElement.innerHTML = Math.round(temprature);
}

function formatDate(date){
  
  let minutes=date.getMinutes();
  let hours=date.getHours();
  let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day =days [date.getDay()];

  if (minutes <  10){
    minutes=`0${minutes}`;
  }
  return `${day} ${hours}:${minutes};
}

function searchCity(city) {
  let apiKey = "5ft9a30134f66e35aoe004b349ff743f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&untis=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Paris");
