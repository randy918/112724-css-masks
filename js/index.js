
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
        }
        catch (error) {
            console.error(error);
        }
    }
    
    
    
    

    let pictures = ["/img/ashutterstock_2260187227.jpg", "/img/ashutterstock_2274444143.jpg", "/img/ashutterstock_2290464509.jpg", "/img/ashutterstock_2308412739.jpg", "/img/ashutterstock_2325872667.jpg", "/img/ashutterstock_2402783767.jpg", "/img/shutterstock_2260187227.jpg", "/img/shutterstock_2274444143.jpg", "/img/shutterstock_2290464509.jpg", "/img/shutterstock_2308412739.jpg", "/img/ashutterstock_497267167.jpg", "/img/shutterstock_2402783767.jpg", "/img/ashutterstock_497764618.jpg", "/img/shutterstock_2402783767.jpg",]

    function getRandomImg() {
        let randomPicture = pictures[r(pictures.length)];
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



