import React, { useEffect, useState } from 'react'

interface BatteryState {
  level: number
  charging: boolean
}

function Battery(){
  const [battery, setBattery] = useState<BatteryState | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const nav = navigator as any
    if (!nav.getBattery) {
      setError('Not supported')
      return
    }
    nav.getBattery().then((b: any) => {
      const update = () => setBattery({ level: b.level, charging: b.charging })
      update()
      b.addEventListener('levelchange', update)
      b.addEventListener('chargingchange', update)
    }).catch(() => setError('Unavailable'))
  }, [])

  return(
    <div className='box-blue'>
      <h2 className='title'>Battery</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='battery' />
        {error ? <p>{error}</p> : battery ? (
          <p>{Math.round(battery.level * 100)}% {battery.charging ? '(charging)' : ''}</p>
        ) : <p>Loading...</p>}
      </div>
    </div>
  )
}

export default Battery
