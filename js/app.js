const cityForm = document.querySelector(`[data-js="change-location" ]`)
const cityNameContainer = document.querySelector(`[data-js="city"]`)
const cityWeatherContainer = document.querySelector(`[data-js="weather"]`)
const cityTemperatureContainer = document.querySelector(`[data-js="temperature"]`)
let timeImg = document.querySelector(`[data-js="time"]`)


const cityCard = document.querySelector(`[data-js="citycard"]`)
const timeIconContain = document.querySelector(`[data-js="time-icon"]`)

cityForm.addEventListener(`submit`, async event => {
    event.preventDefault()




    let inputValue = event.target.city.value

    let [{Key, LocalizedName}] = await getCityData(inputValue)
    let [{WeatherText,Temperature, IsDayTime,WeatherIcon}] = await getCityWeather(Key)

if(cityCard.classList.contains(`d-none`)){
        cityCard.classList.remove(`d-none`)
    }

    let timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`

    if(IsDayTime) {
       timeImg.src = (`./src/day.svg`)
    } else{
       timeImg.src = (`./src/night.svg`)
    }

    timeIconContain.innerHTML = timeIcon
    
cityNameContainer.textContent = LocalizedName
cityWeatherContainer.textContent = WeatherText
cityTemperatureContainer.textContent = Temperature.Metric.Value


console.log(WeatherText,Temperature.Metric.Value)
cityForm.reset()
})