const WeatherCard = ({data}) => {
  const date = new Date()
  const today = (date.getDate() + "").padStart(2, "0")
  const month = (date.getMonth() + "").padStart(2, "0")
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
        <p className="cardFonts">{today}.{month}</p>
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
        <p className="cardFonts">{today}.{month}</p>
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
        <p className="cardFonts">{today}.{month}</p>
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