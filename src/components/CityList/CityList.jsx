import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'


const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {

  const { city, country } = cityAndCountry

  return (
    <ListItem
      button
      key={city}
      onClick={eventOnClickCity}>
      <Grid container
        justifyContent='center'
        alignItems='center'
      >
        <Grid item
          md={9}
          xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item
          md={3}
          xs={12}>
            {
              weather ?
              <Weather temperature={weather.temperature}
                state={weather.state} />
              :
              'No hay Datos'
            }
        </Grid>
      </Grid>
    </ListItem>
  )
}



const CityList = ({ cities, onClickCity }) => {
  const weather = { temperature: 10, state: 'sunny' }
  const [ allWeather, setAllWeather ] = useState({})

  useEffect(() => {
    const setWeatherCity = (city, country, countryCode) => {
      const api = 'b6e0303a09a7ecc96f179897955cfbac'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${api}`

      axios.get(url)
      .then(response => {
        const { data } = response
        const temperature = data.main.temp
        const state = data.weather[0].main.toLowerCase()
        const propName = `${city}-${country}`
        const propValue = { temperature, state }

        setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
      })
    }

    cities.forEach(({ city, country, countryCode }) => setWeatherCity(city, country, countryCode))

  }, [cities])

  return (
    <List>
      {
        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
          allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
      }
    </List>
  )
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired
  })).isRequired,
  onClickCity: PropTypes.func.isRequired
}

export default CityList

// api key openweathermap
// https://api.openweathermap.org/data/2.5/weather?q=Santa%20Cruz&appid=b6e0303a09a7ecc96f179897955cfbac
