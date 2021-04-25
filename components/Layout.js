import { useState, useEffect } from "react";
import Head from "next/head";
import InputComponent from "./Input";
import WeatherStat from "./WeatherStat";
import Image from "next/image"

const Layout = () => {
  const setCity = (city) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0624ffefcf5d5a503a355dc968ab0cf1`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  const [data, setData] = useState(null);
  const today = new Date() 
  const currentDateTime = today.getHours() + ':' + today.getMinutes() + ' ' + today.toDateString()
  console.log(data);
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
          integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
          crossorigin="anonymous"
        />
        <title>Weather</title>
      </Head>
      <main>
        <InputComponent setCity={setCity} />
        <WeatherStat />
        {!!data && (
          <>
            <p className="date">{currentDateTime}</p>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} className="img"></img>
          </>
        )}
      </main>
    </div>
  );
};

export default Layout;
