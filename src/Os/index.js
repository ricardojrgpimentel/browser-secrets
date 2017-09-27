import React from 'react'

class Os extends React.Component{

  handleOSLogo(name){
    switch(name){
      case 'Windows':
        return '/img/windows.svg'
      case 'Linux':
        return '/img/linux.svg'
      case 'Mac OS':
        return '/img/apple.svg'
      case 'Chromium OS':
        return '/img/chrome.svg'
      case 'FreeBSD':
        return '/img/freeBSD.png'
      default:
        return '/img/windows.svg'
    }
  }

  render(){
    return(
      <div className='box-blue'>
        <h2 className='title'>Operating System</h2>
        <div className="content">
          <img src={this.handleOSLogo(this.props.name)} alt='os' />
          <p>
            {this.props.name}
            <span>
              {this.props.version}
            </span>
          </p>
        </div>
      </div>
    )
  }
}

export default Os
