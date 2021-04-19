import Head from "next/head"
import InputComponent from "./Input"

const Layout = () => {
  const setCity = (city) => {console.log(city)}
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
      </main>
    </div>
  )
}

export default Layout