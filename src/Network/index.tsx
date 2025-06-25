import React from 'react'

function Network(){
  const connection = (navigator as any).connection
  const type = connection?.effectiveType
  const down = connection?.downlink

  return(
    <div className='box-blue'>
      <h2 className='title'>Network</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='network' />
        {connection ? (
          <ul>
            {type ? <li><p>Type: {type}</p></li> : null}
            {down ? <li><p>Downlink: {down}Mb/s</p></li> : null}
          </ul>
        ) : (
          <p>Not available</p>
        )}
      </div>
    </div>
  )
}

export default Network
