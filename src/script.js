function refreshWeather(response){
  let tempratureElement=document.querySelector("#temprature");
  temprature=response.data.temprature.current;
   let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  tempratureElement.innerHTML=Math.round(temprature);
}


function searchCity(city) {
let apiKey:"5ft9a30134f66e35aoe004b349ff743f";
let apiUrl:`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
console.log(apiUrl);
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