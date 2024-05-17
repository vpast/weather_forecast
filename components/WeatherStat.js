const WeatherStat = ({ data, currentDateTime }) => {
  // console.log(data)
  const roundvalue = Math.round(data.list[0].main.temp);
  return (
    <>
      <p className="weatherDate">{currentDateTime}</p>
      <div className="weatherStat">
        <img
          src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`}
          className="weatherImg"
        ></img>
        <div className="weatherStatFlex">
          <p className="weatherTemp">{roundvalue}</p>
          <p className="weatherCel">&deg;C</p>
        </div>
      </div>
      <p className="weatherDescription">{data.list[0].weather[0].description}</p>
      <div className="weatherHw">
        <div className="weatherHwStat">
          <p className="weatherHwTitleFont">Humidity</p>
          <p className="weatherHwStatFont">{data.list[0].main.humidity} %</p>
        </div>
        <div className="weatherHwStat">
          <p className="weatherHwTitleFont">Wind Speed</p>
          <p className="weatherHwStatFont">{data.list[0].wind.speed} m/s</p>
        </div>
      </div>
    </>
  );
};

export default WeatherStat;
