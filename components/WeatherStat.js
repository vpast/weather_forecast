const WeatherStat = ({ data, currentDateTime }) => {
  const roundvalue = Math.round(data.current.temp);
  return (
    <>
      <p className="weatherDate">{currentDateTime}</p>
      <div className="weatherStat">
        <img
          src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`}
          className="weatherImg"
        ></img>
        <div className="weatherStatFlex">
          <p className="weatherTemp">{roundvalue}</p>
          <p className="weatherCel">&deg;C</p>
        </div>
      </div>
      <p className="weatherDescription">{data.current.weather[0].description}</p>
      <div className="weatherHw">
        <div className="weatherHwStat">
          <p className="weatherHwTitleFont">Humidity</p>
          <p className="weatherHwStatFont">{data.current.humidity} %</p>
        </div>
        <div className="weatherHwStat">
          <p className="weatherHwTitleFont">Wind Speed</p>
          <p className="weatherHwStatFont">{data.current.wind_speed} m/s</p>
        </div>
      </div>
    </>
  );
};

export default WeatherStat;
