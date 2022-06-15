import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import Forecast from './../components/Forecast'
import useCityPage from './../hooks/useCityPage'

const CityPage = () => {
  const { chartData, city, forecastItemList } = useCityPage()

  const country = 'Bolivia'
  const state = 'clouds'
  const temperature = 20
  const humidity = 65
  const wind = 24

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
          {
            chartData && <ForecastChart data={chartData} />
          }
        </Grid>
        <Grid item>
          {
            forecastItemList && <Forecast forecastItemList={forecastItemList} />
          }
        </Grid>
      </Grid>
    </AppFrame>
  )
}

export default CityPage
