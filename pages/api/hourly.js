const axios = require('axios');


export default function handler(req, res) {
  const token = process.env.WEATHER_API
  const { lat, lon } = req.query

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&cnt=37&appid=${token}`)
    .then(function (response) {
      // handle success
      res.json(response.data)
    })
}