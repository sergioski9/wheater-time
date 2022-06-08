import React from 'react'
import AppFrame from './../components/AppFrame'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import Forecast from './../components/Forecast'


const dataExample = [
  { dayHour: 'vie 14', min: 19, max: 23 },
  { dayHour: 'sab 15', min: 14, max: 19 },
  { dayHour: 'dom 16', min: 25, max: 31 },
  { dayHour: 'lun 17', min: 4, max: 10 },
  { dayHour: 'mar 18', min: 9, max: 14 },
  { dayHour: 'mie 19', min: 17, max: 26 },
  { dayHour: 'jue 20', min: 21, max: 24 }
]

const forecastItemListExample = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Viernes" },
  { hour: 6, state: "cloud", temperature: 18, weekDay: "Sabado" },
  { hour: 12, state: "cloudy", temperature: 18, weekDay: "Domingo" },
  { hour: 18, state: "rain", temperature: 19, weekDay: "Lunes" },
  { hour: 6, state: "sunny", temperature: 17, weekDay: "Martes" },
  { hour: 12, state: "cloud", temperature: 17, weekDay: "Miercoles" }
]

const CityPage = () => {

  const city = 'Santa Cruz'
  const country = 'Bolivia'
  const state = 'cloudy'
  const temperature = 20
  const humidity = 65
  const wind = 24
  const data = dataExample
  const forecastItemList = forecastItemListExample

  return (
    <AppFrame>
      <Grid container
        justifyContent='space-around'
        direction='column'
        spacing={2}>
        <Grid item container
          xs={12}
          justifyContent='center'
          alignItems='flex-end'>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item container
          xs={12}
          justifyContent='center'>
            <Weather state={state} temperature={temperature} />
            <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        <Grid item>
          <ForecastChart data={data} />
        </Grid>
        <Grid item>
          <Forecast forecastItemList={forecastItemList} />
        </Grid>
      </Grid>
    </AppFrame>
  )
}

export default CityPage
