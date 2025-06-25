import React from 'react'

interface DeviceProps {
  vendor?: string
  model?: string
  type?: string
  architecture?: string
}

const Device: React.FC<DeviceProps> = ({ vendor, model, type, architecture }) => {
  return(
    <div className='box-blue'>
      <h2 className='title'>Device Info</h2>
      <div className="content">
        <img src='/img/cpu.svg' alt='browser' />
        <ul>
          {vendor ? <li>Brand: {vendor}</li> : ''}
          {model ? <li>Model: {model}</li> : ''}
          {type ? <li>Type: {type}</li> :''}
          {architecture ? <li>Architecture: {architecture}</li> : ''}
        </ul>
      </div>
    </div>
  )
}

export default Device
