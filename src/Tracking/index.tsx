import React from 'react'

function Tracking(){
  const dnt = navigator.doNotTrack

  return(
    <div className='box-blue'>
      <h2 className='title'>Do Not Track</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='dnt' />
        <p>{dnt === '1' ? 'Enabled' : 'Disabled'}</p>
      </div>
    </div>
  )
}

export default Tracking
