import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import WeatherCard from './components/WeatherCard';
import UserInput from './components/UserInput'

function App() {

  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [maxTemp, setMaxTemp] = useState('');
  const [minTemp, setMinTemp] = useState('');
  const [weather, setWeather] = useState('');
  const [icon, setIcon] = useState('');
  const [background, setBackground] = useState('');
  const [input, setInput] = useState('Vancouver');
  const [userInput, setUserInput] = useState(false)


  useEffect(() => {
    axios({
      url: 'https://api.openweathermap.org/data/2.5/weather',
      method: 'GET',
      dataResponse: 'json',
      params: {
        q: input,
        appid: '715452482892eb581a89ac12addf6fda',
        units: 'metric'
      },
    }).then((res) => {
      setCity(res.data.name);
      setTemp(Math.floor(res.data.main.temp))
      setMaxTemp(Math.floor(res.data.main.temp_max));
      setMinTemp(Math.floor(res.data.main.temp_min));
      setWeather(res.data.weather[0].description);
      setIcon(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@4x.png`)
    })

    // axios({
    //   url: 'https://api.unsplash.com/photos/random',
    //   method: 'GET',
    //   params: {
    //     client_id: 'O4_7se4C-48H8Ov0sftTBMyDFmSZpteoAs-GI-NFCFE',
    //     query: weather,
    //   },
    // }).then((res) => {
    //   setBackground(res.data.urls.full)
    // })
  }, [userInput])


  return (
    <div className="App">
      <img className="background" src={background} alt="" />
      <h1>Whats The Weather</h1>
      {
        userInput === true
        ?
        <WeatherCard city={city} icon={icon} weather={weather} minTemp={minTemp} temp={temp} maxTemp={maxTemp}/>
        : <UserInput setInput={setInput} setUserInput={setUserInput}/>
      }
    </div>
  );
}

export default App;
