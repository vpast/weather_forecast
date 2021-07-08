const axios = require('axios');


export default function handler(req, res) {
  const token = process.env.WEATHER_API
  const { city } = req.query

  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=4&appid=${token}`)
    .then(function (response) {
      // handle success
      res.json(response.data)
    })
}