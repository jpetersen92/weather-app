import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import WeatherCard from './components/WeatherCard';
import UserInput from './components/UserInput'
import Footer from './components/Footer';

function App() {

  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [maxTemp, setMaxTemp] = useState('');
  const [minTemp, setMinTemp] = useState('');
  const [weather, setWeather] = useState('sunshine');
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
        units: 'imperial'
      },
    }).then((res) => {
      setCity(res.data.name);
      setTemp(Math.floor(res.data.main.temp))
      setMaxTemp(Math.floor(res.data.main.temp_max));
      setMinTemp(Math.floor(res.data.main.temp_min));
      setWeather(res.data.weather[0].description);
      setIcon(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@4x.png`)
    })
  }, [input, userInput])

  useEffect(() => {
    axios({
      url: 'https://api.unsplash.com/photos/random',
      method: 'GET',
      params: {
        client_id: 'O4_7se4C-48H8Ov0sftTBMyDFmSZpteoAs-GI-NFCFE',
        query: weather,
      },
    }).then((res) => {
      setBackground(res.data.urls.full)
    })
  })

  const handleClick = () => {
    setUserInput(false)
    setWeather('sunshine')
  }


  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      {
        userInput === true
        ?
        <>
        <WeatherCard city={city} icon={icon} weather={weather} minTemp={minTemp} temp={temp} maxTemp={maxTemp}/>
        <button className="back" onClick={() => handleClick()}>Back</button>
        </>
        : 
        <>
        <h1>Whats The Weather</h1>
        <UserInput setInput={setInput} setUserInput={setUserInput}/>
        </>
      }

      <Footer />
    </div>
  );
}

export default App;
