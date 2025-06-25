import React from 'react'

function Referrer(){
  const referrer = document.referrer
  const historyLength = history.length

  return(
    <div className='box-blue'>
      <h2 className='title'>Navigation</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='referrer' />
        <ul>
          {referrer ? <li><p>Referrer: {referrer}</p></li> : <li><p>No referrer</p></li>}
          <li><p>History Length: {historyLength}</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Referrer
