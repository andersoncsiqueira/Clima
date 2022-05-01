const apiKey = `0dc6M0X222AxkTeB8BcbN8A9DdiOWEnm`


let url = cityName => {
    return `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`
}

let getCityData = async cityName => {

    try {
        const cityUrl = url(cityName)
        const request = await fetch(cityUrl)
    

        if(!request.ok){

            throw new Error(`Nao foi possivel obter os dados`)

        }
        
        let [ cityData ] = await request.json()
        return cityData

    } catch({name, message}){ 

      alert(`${name}: ${message}`)
        
    }
    
}


let getCityWeather = async cityName => {

    try {

        const { Key } = await getCityData(cityName)
        const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${apiKey}`
        const request = await fetch(cityWeatherUrl)
    

        if(!request.ok){

            throw new Error(`Nao foi possivel obter os dados`)

        }
        
        let [ cityWeatherData ] = await request.json()
        debugger
        return cityWeatherData

    } catch({name, message}){ 

      alert(`${name}: ${message}`)
        
    }
    
}


getCityWeather(`Juazeiro`)


