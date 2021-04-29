const WeatherStat = ({ data, currentDateTime }) => {
  return (
    <>
      <p className="date">{currentDateTime}</p>
      <div className="weatherStat">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          className="img"
        ></img>
        <div className="weatherStatFlex">
          <p className="weatherTemp">{data.main.temp}</p>
          <p className="weatherCel">&deg;C</p>
        </div>
      </div>
      <p className="weatherDescription">{data.weather[0].description}</p>
      <div className="weatherHw">
        <div className="weatherHwStat">
          <p className="weatherHwTitleFont">Humidity</p>
          <p className="weatherHwStatFont">{data.main.humidity} %</p>
        </div>
        <div className="weatherHwStat">
          <p className="weatherHwTitleFont">Wind Speed</p>
          <p className="weatherHwStatFont">{data.wind.speed} m/s</p>
        </div>
      </div>
    </>
  );
};

export default WeatherStat;
