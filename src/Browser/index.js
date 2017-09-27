import React from 'react'

class Browser extends React.Component{

  handleBrowserLogo(name){
    switch(name){
      case 'Chrome':
        return '/img/chrome.svg'
      case 'Firefox':
        return '/img/firefox.svg'
      case 'Android Browser':
        return 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/android/android_64x64.png'
      case 'IEMobile':
      case 'IE':
      case 'Edge':
        return '/img/edge.svg'
      case 'Opera':
        return '/img/opera.svg'
      case 'Safari':
        return '/img/safari.svg'
      default:
        return 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/android/android_64x64.png'
    }
  }

  render(){
    return(
      <div className='box-blue'>
        <h2 className='title'>Web Browser</h2>
        <div className="content">
          <img src={this.handleBrowserLogo(this.props.name)} alt='browser' />
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

export default Browser
