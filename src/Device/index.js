import React from 'react'

class Device extends React.Component{
  render(){
    return(
      <div className='box-blue'>
        <h2 className='title'>Device Info</h2>
        <div className="content">
          <img src='/img/cpu.svg' alt='browser' />
          <ul>
            {this.props.vendor ? <li>Brand: {this.props.vendor}</li> : ''}
            {this.props.model ? <li>Model: {this.props.model}</li> : ''}
            {this.props.type ? <li>Type: {this.props.type}</li> :''}
            {this.props.architecture ? <li>Architecture: {this.props.architecture}</li> : ''}
          </ul>
        </div>
      </div>
    )
  }
}

export default Device
