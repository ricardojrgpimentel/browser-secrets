import React, { useEffect, useState } from 'react'

interface OrientationState {
  alpha: number | null
  beta: number | null
  gamma: number | null
}

function Orientation(){
  const [ori, setOri] = useState<OrientationState | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window.DeviceOrientationEvent === 'undefined') {
      setError('Not supported')
      return
    }
    const handler = (e: DeviceOrientationEvent) => {
      setOri({ alpha: e.alpha, beta: e.beta, gamma: e.gamma })
    }
    window.addEventListener('deviceorientation', handler)
    return () => window.removeEventListener('deviceorientation', handler)
  }, [])

  return(
    <div className='box-blue'>
      <h2 className='title'>Orientation</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='orientation' />
        {error ? <p>{error}</p> : ori ? (
          <ul>
            <li><p>Alpha: {ori.alpha}</p></li>
            <li><p>Beta: {ori.beta}</p></li>
            <li><p>Gamma: {ori.gamma}</p></li>
          </ul>
        ) : <p>Waiting...</p>}
      </div>
    </div>
  )
}

export default Orientation
