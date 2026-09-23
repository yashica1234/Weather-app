const apiKey = "YOUR_API_KEY";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if (response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
           
            }else{
                 var data= await response.json();
            console.log(data);
             document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

            document.querySelector(".city").innerHTML = data.name;
           document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
           document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
           document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
           if (data.weather[0].main == "Clouds"){
            const weatherIcon = document.querySelector(".weather-icon");
            weatherIcon.src = "images/clouds.png";
           }
            else if (data.weather[0].main == "Cleaab r"){
                const weatherIcon = document.querySelector(".weather-icon");
                weatherIcon.src = "images/clear.png";
            }
            else if (data.weather[0].main == "Rain"){
                const weatherIcon = document.querySelector(".weather-icon");
                weatherIcon.src = "images/rain.png";
            }
            else if (data.weather[0].main == "Drizzle"){
                const weatherIcon = document.querySelector(".weather-icon");
                weatherIcon.src = "images/drizzle.png";
            }
            else if (data.weather[0].main == "Mist"){
                const weatherIcon = document.querySelector(".weather-icon");
                weatherIcon.src = "images/mist.png";    

           }
        }
        

            }
            
            

        
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        });