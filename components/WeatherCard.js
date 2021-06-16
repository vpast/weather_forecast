const WeatherCard = ({data}) => {
return(
  <>
    <div className="cardFlex">
      <div className="cardBorder">
        <p className="cardFonts">Today</p>
        <div className="cardImg">
          <img
            src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
            className="img"
          ></img>
        </div>
        <p className="cardFonts cardFontsColor">Humidity</p>
        <p className="cardFonts">{data.current.humidity} %</p>
      </div>

      <div className="cardBorder">
        <p className="cardFonts">Today</p>
        <div className="cardImg">
          <img
            src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
            className="img"
          ></img>
        </div>
        <p className="cardFonts cardFontsColor">Humidity</p>
        <p className="cardFonts">{data.current.humidity} %</p>
      </div>

      <div className="cardBorder">
        <p className="cardFonts">Today</p>
        <div className="cardImg">
          <img
            src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
            className="img"
          ></img>
        </div>
        <p className="cardFonts cardFontsColor">Humidity</p>
        <p className="cardFonts">{data.current.humidity} %</p>
      </div>
      
      <div className="cardBorder">
        <p className="cardFonts">Today</p>
        <div className="cardImg">
          <img
            src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
            className="img"
          ></img>
        </div>
        <p className="cardFonts cardFontsColor">Humidity</p>
        <p className="cardFonts">{data.current.humidity} %</p>
      </div>
    </div>
  </>
)
}

export default WeatherCard