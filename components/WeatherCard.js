import { getFormattedDate, getNextDate } from '../utils/utils'
import WeatherItem from './WeatherItem'

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
