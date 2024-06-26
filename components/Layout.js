import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import InputComponent from './Input';
import WeatherStat from './WeatherStat';
import WeatherChart from './WeatherChart';
import WeatherCard from './WeatherCard';
import ErrorInput from './ErrorInput';
import Loader from './Loader';

const Layout = () => {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState('');
  const [activeDay, setActiveDay] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const dateRef = useRef({
    currentDate: new Date(),
    currentDateTime: null,
  });

  const timezoneUpdate = (timezone) => {
    const today = new Date();
    const cityOffset = timezone / 60;
    today.setTime(
      today.getTime() + (today.getTimezoneOffset() + cityOffset) * 60000
    );
    const currentDateTimeNew =
      today.getHours() +
      ':' +
      (today.getMinutes() + '').padStart(2, '0') +
      ' ' +
      today.toDateString();
    dateRef.current.currentDate = today;
    dateRef.current.currentDateTime = currentDateTimeNew;
  };

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
        timezoneUpdate(data.timezone);
        fetch(`api/hourly?lat=${data.coord.lat}&lon=${data.coord.lon}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setApiData(data);
            setShowLoader(false);
          })
          .catch((err) => console.log(err));
      });
  };

  useEffect(() => {
    setShowLoader(true);
    fetch(`/api/weather?city=london`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        timezoneUpdate(data.timezone);
        return fetch(`api/hourly?lat=${data.coord.lat}&lon=${data.coord.lon}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setApiData(data);
            setShowLoader(false);
          })
          .catch((err) => console.log(err));
      });
  }, []);

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
          <div className='dataBlockWrapper'>
            <div className='inputBlockFlex'>
              <div className='inputCompFlex'>
                <InputComponent
                  setCity={setCity}
                  value={inputValue}
                  setValue={setInputValue}
                  error={error}
                />
              </div>
              {showLoader && <Loader />}
            </div>
            {!!apiData && (
              <WeatherStat
                data={apiData}
                currentDateTime={dateRef.current.currentDateTime}
              />
            )}
          </div>
          {!!apiData && (
            <div className='cardBlockFlex'>
              <div className='chartWrapper'>
                <WeatherChart data={apiData} activeDay={activeDay} />
              </div>
              <div className='cards'>
                <WeatherCard
                  data={apiData}
                  currentDate={dateRef.current.currentDate}
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
