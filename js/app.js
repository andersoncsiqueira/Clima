const cityForm = document.querySelector(`[data-js="change-location" ]`)
const cityNameContainer = document.querySelector(`[data-js="city"]`)
const cityWeatherContainer = document.querySelector(`[data-js="weather"]`)
const cityTemperatureContainer = document.querySelector(`[data-js="temperature"]`)

const cityCard = document.querySelector(`[data-js="citycard"]`)

cityForm.addEventListener(`submit`, async event => {
    event.preventDefault()




    const inputValue = event.target.city.value

    const [{Key, LocalizedName}] = await getCityData(inputValue)
    const [{WeatherText,Temperature}] = await getCityWeather(Key)

if(cityCard.classList.contains(`d-none`)){
        cityCard.classList.remove(`d-none`)
    }
    
cityNameContainer.textContent = LocalizedName
cityWeatherContainer.textContent = WeatherText
cityTemperatureContainer.textContent = Temperature.Metric.Value


console.log(WeatherText,Temperature.Metric.Value)
cityForm.reset()
})