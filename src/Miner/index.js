import React from 'react'

class Miner extends React.Component{

  render(){
    return(
      <div className='box-blue'>
        <h2 className='title'>Miner</h2>
        <p>Total Hashs: <span className='total-hash'>Loading...</span></p>
        <p>Hashs per Second: <span className='hash-per-sec'>Loading...</span></p>
        <p>Accepted Hashs: <span className='accept-hash'>Loading...</span></p>
      </div>
    )
  }
}

export default Miner
