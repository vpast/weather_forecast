const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const getFormattedDate = (date) => {
  return `${date.getDate()} ${months[date.getMonth()]}`;
};

const getNextDate = (date, step) => {
  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + step);
  return nextDay;
};

const WeatherItem = ({ itemTitle, src, humidity, isActive, onClick }) => {
  return (
    <div
      className={`cardBorder ${isActive && 'cardBorderActive'}`}
      onClick={() => onClick()}
    >
      <p className='cardFonts'>{itemTitle}</p>
      <div className='cardImg'>
        <img src={src} className='img' />
      </div>
      <p className='cardFonts'>Humidity</p>
      <p className='cardFonts'>
        {humidity} % {isActive}
      </p>
    </div>
  );
};

const WeatherCard = ({ data, currentDate, activeDay, setActiveDay }) => {
  const step = 8;
  const days = [];

  days.push({
    itemTitle: 'Today',
    src: `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
    humidity: data.list[0].main.humidity,
  });

  for (let i = 8; i <= 37; i+= step) {
    const date = getNextDate(currentDate, i / step);
    const formattedDate = getFormattedDate(date);
    if (data.list[i] != undefined) {
      days.push({
        itemTitle: formattedDate,
        src: `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`,
        humidity: data.list[i].main.humidity,
      });
    }
  }

  return (
    <>
      <div className='cardFlex'>
        {days.map((day, index) => (
          <WeatherItem
            key={index}
            {...day}
            isActive={index === activeDay}
            onClick={() => setActiveDay(index)}
          />
        ))}
      </div>
    </>
  );
};

export default WeatherCard;
