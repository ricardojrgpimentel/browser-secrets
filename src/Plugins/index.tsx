import React from 'react'

function Plugins(){
  const list = Array.from(navigator.plugins || [])

  return(
    <div className='box-blue'>
      <h2 className='title'>Plugins</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='plugins' />
        {list.length ? (
          <ul>
            {list.map(p => <li key={p.name}><p>{p.name}</p></li>)}
          </ul>
        ) : (
          <p>None detected</p>
        )}
      </div>
    </div>
  )
}

export default Plugins
