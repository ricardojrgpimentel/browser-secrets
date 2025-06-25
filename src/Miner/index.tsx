import React from 'react'

interface MinerProps {
  clientKey?: string
}

const Miner: React.FC<MinerProps> = () => {
  return(
    <div className='box-blue'>
      <h2 className='title'>Miner</h2>
      <div className="content">
        <img src='/img/monero.svg' alt='browser' />
        <ul>
          <li><p>Total Hashs: <span className='total-hash'>Loading...</span></p></li>
          <li><p>Hashs per Second: <span className='hash-per-sec'>Loading...</span></p></li>
          <li><p>Accepted Hashs: <span className='accept-hash'>Loading...</span></p></li>
        </ul>
      </div>
    </div>
  )
}

export default Miner
