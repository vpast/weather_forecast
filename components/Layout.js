import { useState, useEffect } from "react";
import Head from "next/head";
import InputComponent from "./Input";

const Layout = () => {
  const setCity = (city) => {
    console.log(city);
    return setCity;
  };
  const [data, setData] = useState(null);
  useEffect(() => {
    const city = "Moscow";
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0624ffefcf5d5a503a355dc968ab0cf1`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
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
        {!!data && <div>{data.wind.speed}</div>}
      </main>
    </div>
  );
};

export default Layout;
