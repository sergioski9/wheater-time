import { useEffect, useDebugValue } from 'react'
import axios from 'axios'
import getForecastItemList from './../utils/transform/getForecastItemList'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import { getCityCode } from './../utils/utils'

const useCityPage = (allChartData, allForecastItemList, onSetChartData, onSetForecastItemList) => {
  const { city, countryCode } = useParams()

  useDebugValue('CityPage debugValue hook')

  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode })
      const cityCode = getCityCode(city, countryCode)

      try {
        const { data } = await axios.get(url)

        const dataAux = getChartData(data)

        onSetChartData({ [cityCode]: dataAux })

        const forecastItemListAux = getForecastItemList(data)

        onSetForecastItemList({ [cityCode]: forecastItemListAux })
      } catch (error) {
        console.log(error)
      }
    }

    const cityCode = getCityCode(city, countryCode)

    if (allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]) {
      getForecast()
    }
  }, [city, countryCode, allChartData, allForecastItemList, onSetChartData, onSetForecastItemList])

  return { city, countryCode }
}

export default useCityPage
