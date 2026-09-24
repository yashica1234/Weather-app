const apiKey = "YOUR_API_KEY";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if (response.status == 404){ //error has occured
                document.querySelector(".error").style.display = "block"; //display error message
                 document.querySelector(".weather").style.display = "none"; //hide weather card
           
            }else{
                 var data= await response.json(); //API response ko JavaScript-readable data mein convert karta hai.

            console.log(data);
             document.querySelector(".weather").style.display = "block"; //show weather card
    document.querySelector(".error").style.display = "none"; //hide error message

            document.querySelector(".city").innerHTML = data.name; //city name update
           document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; //temp update
           document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; //humidity update
           document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"; //wind speed update
           if (data.weather[0].main == "Clouds"){
            const weatherIcon = document.querySelector(".weather-icon");
            weatherIcon.src = "images/clouds.png";
           }
            else if (data.weather[0].main == "Clear"){
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