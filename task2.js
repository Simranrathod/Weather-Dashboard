const search = document.querySelector('.search');
const searchbtn = document.getElementById('searchbtn');
const img = document.querySelector('.Weather-img');
const temp1 = document.getElementById('temp1');
const temp2 = document.getElementById('temp2');
const hum = document.getElementById('humadity')
const wind = document.getElementById('windspeed');
const notfound =document.getElementById('notfound');
const body=document.getElementById("body")
async function checkweather(city) {
    const api = "90baba1c7f840af54c6a3dc6b74ede07";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod===`404`){

    notfound.style.display="flex";
    notfound.style.flexDirection="column";
    body.style.display="none";

        return;
    }
    notfound.style.display="none";
    body.style.display="flex";
    body.style.flexDirection="column";

    temp1.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    temp2.innerHTML = `${weather_data.weather[0].description}`;
    hum.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}km/h`;
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            img.src = "./imgsrc/cloud.png";
            break;
        case 'Clear':
            img.src = "./imgsrc/clear.png";
            break;
        case 'Rain':
            img.src = "./imgsrc/rain.png";
            break;
        case 'Smoke':
            img.src = "./imgsrc/snow.png";
            break;
        case 'Haze':
            img.src = "./imgsrc/haze.png";
          break;
    }

}

searchbtn.addEventListener('click', () => {
    checkweather(search.value);

});