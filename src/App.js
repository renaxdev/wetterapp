import './App.css';
import Weather from "./weather"
import React, {useState,useEffect} from 'react';

function App() {
  const API_KEY = "[YOUR API KEY]";

  const [weatherdata, setWeatherData] = useState([])

  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("Berlin")

  useEffect(() => {
    request()
  }, [query])


  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const updateQuery = e => {
    e.preventDefault()
    setQuery(search)
  }

  const request = async() => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)
    const data = await response.json()
    if(data.cod != 404){
      setWeatherData(data)
    }

    else{
      setWeatherData(
        {
          "weather": [
            {
              "icon": "01d"
            }
          ],
          "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "humidity": 0
          },
          "visibility": 16093,
          "name": "No city found",
          }
      )
    }
    console.log(weatherdata)
    console.log(weatherdata.weather)
  }


  return (
    <div className={weatherdata.weather?.[0].icon.includes("n") ? "DarkApp" : "App"}>
      <form onSubmit={updateQuery} className='searchform'>
        <input type="text" value={search} onChange={updateSearch} className='searchinput'></input>
        <button type='submit' className='searchbutton'>Search</button>
      </form>
      <Weather 
      name={weatherdata.name} 
      temp={weatherdata.main?.temp} 
      hum={weatherdata.main?.humidity}
      pressure={weatherdata.main?.pressure}
      feels_like={weatherdata.main?.feels_like}
      temp_min={weatherdata.main?.temp_min} 
      temp_max={weatherdata.main?.temp_max} 
      icon={weatherdata.weather?.[0].icon}
      />
      <footer>Made with ❤️ by renaxdev | API by openweathermap 🌞</footer>
    </div>
  );
}

export default App;