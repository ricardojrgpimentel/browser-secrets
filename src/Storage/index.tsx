import React from 'react'

function Storage(){
  const local = localStorage.length
  const session = sessionStorage.length
  const cookies = document.cookie ? document.cookie.split(';').length : 0

  return(
    <div className='box-blue'>
      <h2 className='title'>Storage</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='storage' />
        <ul>
          <li><p>localStorage: {local} keys</p></li>
          <li><p>sessionStorage: {session} keys</p></li>
          <li><p>Cookies: {cookies}</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Storage
