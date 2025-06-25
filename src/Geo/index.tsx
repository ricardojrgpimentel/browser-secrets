import React, { useEffect, useState } from 'react'

interface Position {
  latitude: number
  longitude: number
}

function Geo(){
  const [position, setPosition] = useState<Position | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ latitude: pos.coords.latitude, longitude: pos.coords.longitude })
      },
      () => setError('Permission denied')
    )
  }, [])

  return(
    <div className='box-blue'>
      <h2 className='title'>Geolocation</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='geo' />
        {error ? (
          <p>{error}</p>
        ) : position ? (
          <p>{position.latitude.toFixed(2)}, {position.longitude.toFixed(2)}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Geo
