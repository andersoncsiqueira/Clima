const apiKey = `0dc6M0X222AxkTeB8BcbN8A9DdiOWEnm`
const city = `Juazeiro`

let url = city => {
    return `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`
}

let getDatas = async (url) => {

    try {

        const request = await fetch(url)
    let [ cityData ] = await request.json()

        if(!request.ok){

            throw new Error(`Nao foi possivel obter os dados`)

        }
    
        return cityData

    } catch({name, message}){ 

      alert(`${name}: ${message}`)
        
    }
    
}

getDatas(url(`Juazeiro`))


