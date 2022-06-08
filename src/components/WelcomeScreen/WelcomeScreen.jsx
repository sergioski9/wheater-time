import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'


const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null)
  const [ vanta, setVanta ] = useState(0)

  console.log('useRefDiv:', myRefDiv.current)

  useEffect(() => {
    console.log('use effect:', myRefDiv.current)

    if (!vanta) {
      setVanta(Clouds({
        THREE,
        el: myRefDiv.current
      }))

      console.log('vanta ya no es mas 0, ahora es 1')
    }

    return () => {
      if (vanta) {
        vanta.destroy()
        console.log('Libero los espacios')
      }
    }
  }, [vanta])

  return (
    <div className='full-screen' ref={myRefDiv}>
      {children}
    </div>
  )
}

WelcomeScreen.propTypes = {
  children: PropTypes.node
}

export default WelcomeScreen
