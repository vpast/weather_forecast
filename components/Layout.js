import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Head from "next/head";
import InputComponent from "./Input";
import WeatherStat from "./WeatherStat";
import Image from "next/image";
import WeatherChart from "./WeatherChart";
import WeatherCard from "./WeatherCard";
import ErrorInput from "./ErrorInput";

// const WeatherChart = dynamic(() => import("./WeatherChart"), { ssr: false });

const Layout = () => {
  const [data, setData] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [error, setError] = useState("");
  const [activeDay, setActiveDay] = useState(0);
  const setCity = (city) => {
    setError("");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=4&appid=0624ffefcf5d5a503a355dc968ab0cf1`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.coord != undefined) {
          fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&exclude=hourly,minutely&appid=0624ffefcf5d5a503a355dc968ab0cf1`
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setData(data);
            });
        } else {
          setError("Wrong input, try another please.");
        }
      });
  };
  console.log(data);

  useEffect(() => {
    if (!data) {
      return;
    }
    const today = new Date();
    const cityOffset = data.timezone_offset / 60;
    today.setTime(
      today.getTime() + (today.getTimezoneOffset() + cityOffset) * 60000
    );
    const currentDateTimeNew =
      today.getHours() +
      ":" +
      (today.getMinutes() + "").padStart(2, "0") +
      " " +
      today.toDateString();
    setCurrentDateTime(currentDateTimeNew);
    setCurrentDate(today);
  }, [data]);
  // console.log(data);
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
          <div className="wrapper">
            <div>
              <InputComponent setCity={setCity} />
              {!!error && <ErrorInput error={error} />}
              {!!data && (
                <WeatherStat data={data} currentDateTime={currentDateTime} />
              )}
            </div>
            {!!data && (
              <div className="cardBlockFlex">
                <div className="chartWrapper">
                  <WeatherChart data={data} activeDay={activeDay} />
                </div>
                <div className="cards">
                  <WeatherCard data={data} currentDate={currentDate} activeDay={activeDay} setActiveDay={setActiveDay}/>
                </div>
              </div>
            )}
          </div>
      </main>
    </div>
  );
};

export default Layout;
