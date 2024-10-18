const apiKey = "01352edeb7acb6b188b247591805098d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchCity input");
const searchBtn = document.querySelector(".searchCity button");
const weatherIcons = document.querySelector(".weatherIcon");


async function checkWeather(cityName){
    const response = await fetch(`${apiUrl + cityName}&appid=${apiKey}`);

    if(response.status == 404){
        alert("City not found");
    }
    var data = await response.json();
    
    console.log(data);


    

    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = "Temprature-" + Math.round(data.main.temp) + "°C" ;
    document.querySelector(".humidity").innerHTML = "Humidity-" +  data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = "Wind speed-"  +  data.wind.speed + "Km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcons.scr = "heavycloud.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcons.src = "sunny.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcons.src = "rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcons.src = "rain.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcons.src = "mist.jpg";
    } 
 
}    
    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })


checkWeather();