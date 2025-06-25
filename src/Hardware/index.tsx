import React from 'react'

function Hardware(){
  const cores = navigator.hardwareConcurrency
  const memory = (navigator as any).deviceMemory

  return(
    <div className='box-blue'>
      <h2 className='title'>Hardware</h2>
      <div className='content'>
        <img src='/img/cpu.svg' alt='hardware' />
        <ul>
          {cores ? <li><p>Cores: {cores}</p></li> : null}
          {memory ? <li><p>Memory: {memory} GB</p></li> : null}
        </ul>
      </div>
    </div>
  )
}

export default Hardware
