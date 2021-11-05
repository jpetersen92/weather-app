import { useState } from "react/cjs/react.development"


const WeatherCard = (props) => {

    const tempF = props.temp
    const minTempF = props.minTemp
    const maxTempF = props.maxTemp
    const tempC = Math.floor((props.temp - 32) * 5/9)
    const minTempC = Math.floor((props.minTemp - 32) * 5/9)
    const maxTempC = Math.floor((props.maxTemp - 32) * 5/9)
    const [tempConversion, setTempConversion] = useState(false)

    const tempSwitch = () => {
        setTempConversion(!tempConversion)
    }



    return(
        <div className="weatherCard">
            <h2>{props.city}</h2>
            <img src={props.icon} alt={props.weather} />
            <h3>{props.weather}</h3>
            <ul>
                <li>
                    <div className="temp min">
                        {
                            tempConversion === false
                            ? <p>{minTempF}°</p>
                            : <p>{minTempC}°</p>
                        }
                        <p>Min</p>
                    </div>
                </li>
                <li>
                    <div className="temp current">
                        {
                            tempConversion === false
                            ? <p>{tempF}°</p>
                            : <p>{tempC}°</p>
                        }
                        <p>Current</p>
                    </div>
                </li>
                <li>
                    <div className="temp max">
                        {
                            tempConversion === false
                            ? <p>{maxTempF}°</p>
                            : <p>{maxTempC}°</p>
                        }
                        <p>Max</p>
                    </div>
                </li>
            </ul>
            <label class="rocker rocker-small">
                <input type="checkbox" onChange={tempSwitch}/>
                <span class="switch-left">C°</span>
                <span class="switch-right">F°</span>
            </label>
        </div>
    )
}

export default WeatherCard