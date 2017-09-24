import React from 'react'

class Screen extends React.Component{
  render(){
    return(
      <div className='box-blue'>
        <h2 className='title'>Screen Resolution</h2>
        <p>Resolution: {window.screen.width}x{window.screen.height}</p>
        <p>Color Depth: {window.screen.colorDepth}</p>
      </div>
    )
  }
}

export default Screen
