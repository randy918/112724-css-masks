
document.addEventListener("DOMContentLoaded", function () {
    // Your code here

    document.body.style.backgroundColor = 'green';

    //>  ████████████████████████████████████  CHILDREN






    //>  ███████████████ OPEN WEATHER API d1a7fcdb2d6f38c6b216b37322444de9

    //>  ████████████████████████████████████  BRIGHT BACKGROUND

    function getBrightRandomRGB() {
        const rrr = r(86, 255);
        const ggg = r(86, 255);
        const bbb = r(86, 255);
        const rgbColor = `rgb(${rrr}, ${ggg}, ${bbb})`;
        return rgbColor;
    }

    document.body.style.backgroundColor = getBrightRandomRGB();

    //_ ████████████████████████████████████  DATA STRUCTURES 

    //_ ████████████████████████████████████  DATA STRUCTURES 


    //>  ████████████████████████████████████  GENERAL PROGRAM

    const app = document.getElementById('app');
    const date = document.getElementById('app__dateAndCity__date');
    const city = document.getElementById('app__dateAndCity__city');
    const temp = document.getElementById('app__temp');
    const tempImg = document.getElementById('app__tempImg');
    const description = document.getElementById('app__description');
    const tempMax = document.getElementById('tempMax');
    const tempMin = document.getElementById('tempMin');

    const today = new Date();
    const month = months[getMonth() - 1];
    const day = getDay();
    const year = getYear();

    date.innerHTML = `${month} ${day} ${year}`;

    //?  ████████████████████████████████████  ASYNC AWAIT

    const getWeather = async () => {
        try {
            const weatherDataFetch = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=d1a7fcdb2d6f38c6b216b37322444de9&units=metric', {
                headers: {
                    Accept: "application/json"
                }
            });
            const weatherData = await weatherDataFetch.json();
            console.log(weatherData);
            city.innerHTML = `${weatherData.name}`;
            description.innerHTML = `${weatherData.weather[0].main}`;
            app__tempImg.innerHTML = `<img class='weather-icon' src = 'http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png'>`
            app__temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}</h2>`

            function fahrenheitToCelsius(element) {
                return (element) * 9 / 5 + 32;
            }

            const tempCelsius = weatherData.main.temp;
            const tempCelsiusHigh = weatherData.main.temp_max;
            const tempCelsiusLow = weatherData.main.temp_min;
            const tempFahrenheit = (tempCelsius * 9 / 5) + 32;
            app__temp.innerHTML = `<h2>${Math.round(fahrenheitToCelsius(tempCelsius))}&deg;</h2>`;
            tempMax.innerHTML = `<h5>${Math.round(fahrenheitToCelsius(tempCelsiusHigh))}&deg;</h5>`;
            tempMin.innerHTML = `<h5>${Math.round(fahrenheitToCelsius(tempCelsiusLow))}&deg;</h5>`;
        }
        catch (error) {
            console.error(error);
        }
    }






    let pictures = ["/img/cd1.webp",]

    // let pictures = ["/img/ashutterstock_2260187227.jpg", "/img/ashutterstock_2274444143.jpg", "/img/ashutterstock_2290464509.jpg", "/img/ashutterstock_2308412739.jpg", "/img/ashutterstock_2325872667.jpg", "/img/ashutterstock_2402783767.jpg", "/img/shutterstock_2260187227.jpg", "/img/shutterstock_2274444143.jpg", "/img/shutterstock_2290464509.jpg", "/img/shutterstock_2308412739.jpg", "/img/ashutterstock_497267167.jpg", "/img/shutterstock_2402783767.jpg", "/img/ashutterstock_497764618.jpg", "/img/shutterstock_2402783767.jpg",]

    function getRandomImg() {
        let randomPicture = pictures[r(pictures.length - 1)];
        console.log(randomPicture);
        return randomPicture;
    }

    async function catchRainbow() {
        const response = await fetch(getRandomImg());
        const blob = await response.blob();
        document.getElementById('container__image').src = URL.createObjectURL(blob);


    }

    //?  ████████████████████████████████████  ASYNC AWAIT


    //>  ████████████████████████████████████  GENERAL PROGRAM

    catchRainbow();


    getWeather();









    //>  ████████████████████████████████████  GENERAL PROGRAM


})





// console.log(document.documentElement);

//< ████████████████████████████████████  MISC



