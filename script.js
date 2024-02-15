const apikey = "b9d7406503b9f53f23c1ec0d8d82640d";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";
        const searchText = document.querySelector(".searchtext");
        const searchButton = document.querySelector(".searchbtn");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiurl + city + `&appid=${apikey}`);

            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
            const data = await response.json();
            document.querySelector(".temp").innerHTML= Math.round(data.main.temp - 273.15) + "°c";
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

            if(data.weather[0].main=="Clear"){
                weatherIcon.src="weather-images/clear.png";
            }
            else if(data.weather[0].main=="Clouds"){
                weatherIcon.src="weather-images/clouds.png";
            }
            else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="weather-images/drizzle.png";
            }
            else if(data.weather[0].main=="Mist"){
                weatherIcon.src="weather-images/mist.png";
            }
            else if(data.weather[0].main=="Rain"){
                weatherIcon.src="weather-images/rain.png";
            }
            else if(data.weather[0].main=="Snow"){
                weatherIcon.src="weather-images/snow.png";
            }
            else if(data.weather[0].main=="Haze"){
                weatherIcon.src="weather-images/haze.png";
            }
            else if(data.weather[0].main=="Fog"){
                weatherIcon.src="weather-images/fog.png";
            }
            else if(data.weather[0].main=="Dust"){
                weatherIcon.src="weather-images/dust.png";
            }
            console.log(data);
            document.querySelector('.weather').style.display="block";
            document.querySelector(".error").style.display="none";
            }
        }
        searchButton.addEventListener("click", () =>{
            checkWeather(searchText.value);
        })
