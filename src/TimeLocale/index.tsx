import React from 'react'

function TimeLocale(){
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const languages = navigator.languages ? navigator.languages.join(', ') : navigator.language

  return(
    <div className='box-blue'>
      <h2 className='title'>Timezone & Locale</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='timezone' />
        <ul>
          <li><p>Timezone: {timezone}</p></li>
          <li><p>Languages: {languages}</p></li>
        </ul>
      </div>
    </div>
  )
}

export default TimeLocale
