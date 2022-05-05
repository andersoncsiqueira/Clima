const cityForm = document.querySelector(`[data-js="change-location" ]`)
const cityNameContainer = document.querySelector(`[data-js="city"]`)
const cityWeatherContainer = document.querySelector(`[data-js="weather"]`)
const cityTemperatureContainer = document.querySelector(`[data-js="temperature"]`)
let timeImg = document.querySelector(`[data-js="time"]`)


const cityCard = document.querySelector(`[data-js="citycard"]`)
const timeIconContain = document.querySelector(`[data-js="time-icon"]`)


const insertDatasWeatherCity = async (nameCity) => {

    let [{Key, LocalizedName}] = await getCityData(nameCity)
    let [{WeatherText,Temperature, IsDayTime,WeatherIcon}] = await getCityWeather(Key)


    cityCard.classList.contains(`d-none`)?cityCard.classList.remove(`d-none`):none


   let timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`

   timeImg.src = IsDayTime?`./src/day.svg`:`./src/night.svg`

    timeIconContain.innerHTML = timeIcon
    
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value



}

cityForm.addEventListener(`submit`, event => {
    event.preventDefault()

let nameCity = event.target.city.value

   
insertDatasWeatherCity(nameCity)


cityForm.reset()
})