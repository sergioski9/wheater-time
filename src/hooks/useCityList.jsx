import { useState, useEffect } from 'react'
import axios from 'axios'
import { validValues } from './../components/IconState'
import { getCityCode } from './../utils/utils'
import { getWeatherUrl } from './../utils/urls'
import { toCelsius } from './../utils/utils'


const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const setWeatherCity = async (city, countryCode) => {
      const url = getWeatherUrl({ city, countryCode })

      try {
        const response = await axios.get(url)

        const { data } = response
        const temperature = toCelsius(data.main.temp)
        const stateFromServer = data.weather[0].main.toLowerCase()

        const state = validValues.includes(stateFromServer) ? stateFromServer : null

        const propName = getCityCode(city, countryCode)
        const propValue = { temperature, state }

        setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
      } catch (error) {
        if (error.response) {
          setError('Ha ocurrido un error con el servidor del clima')
        } else if (error.request) {
          setError('Verifique su conexion a internet')
        } else {
          setError('Error al cargar los datos')
        }
      }
    }

    cities.forEach(({ city, countryCode }) => setWeatherCity(city, countryCode))

  }, [cities])

  return { allWeather, error, setError }
}

export default useCityList
