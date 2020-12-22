const searchBtn = document.getElementById("search-btn")
const container = document.getElementById("container")
const search = document.getElementById("search")
const result = document.getElementById("result")

searchBtn.addEventListener("click", weatherInfo)

function weatherInfo(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=3e9d75d36023f6a5ed774fc7d9f48a75`)
    .then(data =>{
       return data.json()
    })
    .then(readableData=>{
    
        console.log(readableData)
        cityDetails(readableData)
    })
}

function cityDetails(details){
    console.log(details)

    const description = `<p>${search.value} has a temperature of ${details.main.temp}°C, it has a wind speed of ${details.wind.speed} m/s
    <br>
    weather description: ${details.weather[0].description}
    </p>`

    result.innerHTML = description
}
