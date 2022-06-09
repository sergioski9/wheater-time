import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiRaindrop
} from 'react-icons/wi'

export const validValues = [
  'clouds',
  'drizzle',
  'snow',
  'clear',
  'rain',
  'thunderstorm'
]

const stateByName = {
  clouds: WiDayCloudy,
  snow: WiSnow,
  clear: WiDaySunny,
  rain: WiRain,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm

}

const IconState = ({ state }) => {
  const StateByName = stateByName[state]
  return (
    <StateByName state={state} />
  )
}

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired
}

export default IconState
