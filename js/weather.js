const apiKey = `0dc6M0X222AxkTeB8BcbN8A9DdiOWEnm`
const baseUrl = `http://dataservice.accuweather.com/`

let getCityUrl = cityName => {
    return `${baseUrl}locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`
}

const getWeatherUrl = cityKey => 
`${baseUrl}currentconditions/v1/${cityKey}?apikey=${apiKey}`

let fetchData = async url => {

    try {
        
        const response = await fetch(url)
    
        if(!response.ok){

            throw new Error(`Nao foi possivel obter os dados`)

        }
        
        return response.json()

    } catch({name, message}){ 

      alert(`${name}: ${message}`)
        
    }
    
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))




