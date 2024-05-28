import { useState, useEffect } from 'react';
import Head from 'next/head';
import InputComponent from './Input';
import WeatherStat from './WeatherStat';
import WeatherChart from './WeatherChart';
import WeatherCard from './WeatherCard';
import ErrorInput from './ErrorInput';
import Loader from './Loader';

const Layout = () => {
  const [data, setData] = useState(null);
  const [currentTimezone, setCurrentTimezone] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [error, setError] = useState('');
  const [activeDay, setActiveDay] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  const setCity = (city) => {
    setError('');
    setShowLoader(true);
    if (!city) {
      setError('Fill the input please.');
      setShowLoader(false);
      return;
    }
    fetch(`/api/weather?city=${city}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCurrentTimezone(data.timezone);
        fetch(`api/hourly?lat=${data.coord.lat}&lon=${data.coord.lon}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setData(data);
            setShowLoader(false);
          });
      });
  };

  useEffect(() => {
    setShowLoader(true);
    fetch(`/api/weather?city=london`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCurrentTimezone(data.timezone);
        return fetch(`api/hourly?lat=${data.coord.lat}&lon=${data.coord.lon}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setData(data);
            setShowLoader(false);
          });
      });
  }, []);

  useEffect(() => {
    if (data && currentTimezone !== null) {
      const today = new Date();
      const cityOffset = currentTimezone / 60;
      today.setTime(
        today.getTime() + (today.getTimezoneOffset() + cityOffset) * 60000
      );
      const currentDateTimeNew =
        today.getHours() +
        ':' +
        (today.getMinutes() + '').padStart(2, '0') +
        ' ' +
        today.toDateString();
      setCurrentDateTime(currentDateTimeNew);
      setCurrentDate(today);
    }
  }, [data, currentTimezone]);

  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css'
          integrity='sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ'
          crossorigin='anonymous'
        />
        <title>Weather</title>
      </Head>
      <main>
        <div className='mainWrapper'>
          <div className='inputWrapper'>
            <div className='flexWrapper'>
              <InputComponent setCity={setCity} />
              {showLoader && <Loader />}
            </div>
            {!!error && <ErrorInput error={error} />}
            {!!data && (
              <WeatherStat data={data} currentDateTime={currentDateTime} />
            )}
          </div>
          {!!data && (
            <div className='cardBlockFlex'>
              <div className='chartWrapper'>
                <WeatherChart data={data} activeDay={activeDay} />
              </div>
              <div className='cards'>
                <WeatherCard
                  data={data}
                  currentDate={currentDate}
                  activeDay={activeDay}
                  setActiveDay={setActiveDay}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Layout;
