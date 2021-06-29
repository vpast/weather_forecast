const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const getFormattedDate = (date) => {
  return `${date.getDate()} ${months[date.getMonth()]}`;
};

const getNextDate = (date, step = 1) => {
  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + step);
  return nextDay;
};

const WeatherItem = ({ itemTitle, src, humidity, isActive, onClick}) => {
  return (
    <div className={`cardBorder ${isActive && 'cardBorderActive'}`} onClick={() => onClick()}>
      <p className="cardFonts">{itemTitle}</p>
      <div className="cardImg">
        <img src={src} className="img" />
      </div>
      <p className="cardFonts cardFontsColor">Humidity</p>
      <p className="cardFonts">{humidity} % {isActive}</p>
    </div>
  );
};

const WeatherCard = ({ data, currentDate, activeDay, setActiveDay}) => {
  const days = [
    {
      itemTitle: "Today",
      src: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
      humidity: data.current.humidity,
    }
  ];

  for (let i = 1; i <= 3; i++) {
    days.push(    
    {
      itemTitle: getFormattedDate(getNextDate(currentDate, i)),
      src: `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`,
      humidity: data.daily[i].humidity,
    })
  }
  
  return (
    <>
      <div className="cardFlex">
        {days.map((day, index) => <WeatherItem key={index} {...day} isActive={index === activeDay} onClick={() => setActiveDay(index)}/>)}
      </div>
    </>
  );
};

export default WeatherCard;
