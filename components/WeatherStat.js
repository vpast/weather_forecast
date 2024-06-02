const WeatherStat = ({ data, currentDateTime }) => {
  const [firstDataValue] = data.list || [];
  const { main, weather, wind } = firstDataValue;
  const [firstWeatherValue] = weather || [];
  const { temp, humidity } = main || {};
  const { icon, description } = firstWeatherValue;
  
  if (!firstDataValue) return null;
  if (!firstWeatherValue) return null;
  
  const roundvalue = Math.round(temp);
  return (
    <>
      <p className="weatherDate">{currentDateTime}</p>
      <div className="weatherStat">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
          className="weatherImg"
        ></img>
        <div className="weatherStatFlex">
          <p className="weatherTemp">{roundvalue}</p>
          <p className="weatherCel">&deg;C</p>
        </div>
      </div>
      <p className="weatherDescription">{description}</p>
      <div className="weatherHw">
        <div className="weatherHwStat">
          <p className="weatherHwTitleFont">Humidity</p>
          <p className="weatherHwStatFont">{humidity} %</p>
        </div>
        <div className="weatherHwStat">
          <p className="weatherHwTitleFont">Wind Speed</p>
          <p className="weatherHwStatFont">{wind.speed} m/s</p>
        </div>
      </div>
    </>
  );
};

export default WeatherStat;
