const apiKey = `0dc6M0X222AxkTeB8BcbN8A9DdiOWEnm`
const baseUrl = `http://dataservice.accuweather.com/`

let getCityUrl = cityName => {
    return `${baseUrl}locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`
}

const getWeatherUrl = ({Key}) => 
`${baseUrl}currentconditions/v1/${Key}?apikey=${apiKey}`

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

const getCityWeather = async cityName => {

    const [ cityData ]= await getCityData(cityName)
    return fetchData(getWeatherUrl(cityData))

}

getCityWeather(`Sao jose do egito`).then(console.log)

