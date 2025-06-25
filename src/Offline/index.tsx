import React, { useEffect, useState } from 'react'

function Offline(){
  const [online, setOnline] = useState<boolean>(navigator.onLine)
  const [sw, setSw] = useState<number>(0)

  useEffect(() => {
    const update = () => setOnline(navigator.onLine)
    window.addEventListener('online', update)
    window.addEventListener('offline', update)
    if (navigator.serviceWorker?.getRegistrations) {
      navigator.serviceWorker.getRegistrations().then(r => setSw(r.length))
    }
    return () => {
      window.removeEventListener('online', update)
      window.removeEventListener('offline', update)
    }
  }, [])

  return(
    <div className='box-blue'>
      <h2 className='title'>Connectivity</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='offline' />
        <ul>
          <li><p>Online: {online ? 'yes' : 'no'}</p></li>
          <li><p>Service Workers: {sw}</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Offline
