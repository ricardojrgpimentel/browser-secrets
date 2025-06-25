import React, { useEffect, useState } from 'react'

interface DeviceInfo {
  deviceId: string
  kind: string
  label: string
}

function MediaDevices(){
  const [devices, setDevices] = useState<DeviceInfo[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      setError('Not supported')
      return
    }
    navigator.mediaDevices.enumerateDevices().then(list => {
      setDevices(list.map(d => ({ deviceId: d.deviceId, kind: d.kind, label: d.label || 'Unknown' })))
    }).catch(() => setError('Permission denied'))
  }, [])

  return(
    <div className='box-blue'>
      <h2 className='title'>Media Devices</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='media' />
        {error ? <p>{error}</p> : devices.length ? (
          <ul>
            {devices.map(d => (
              <li key={d.deviceId}><p>{d.kind}: {d.label}</p></li>
            ))}
          </ul>
        ) : <p>None</p>}
      </div>
    </div>
  )
}

export default MediaDevices
