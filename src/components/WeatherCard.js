const WeatherCard = (props) => {

    return(
        <div className="weatherCard">
            <h2>{props.city}</h2>
            <img src={props.icon} alt={props.weather} />
            <h3>{props.weather}</h3>
            <ul>
                <li>
                    <div className="temp min">
                    <p>{props.minTemp}°</p>
                    <p>Min</p>
                    </div>
                </li>
                <li>
                    <div className="temp current">
                        <p>{props.temp}°</p>
                        <p>Current</p>
                    </div>
                </li>
                <li>
                    <div className="temp max">
                        <p>{props.maxTemp}°</p>
                        <p>Max</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default WeatherCard