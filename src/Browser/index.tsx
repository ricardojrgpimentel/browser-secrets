import React from 'react'

interface BrowserProps {
  name?: string
  version?: string
}

function handleBrowserLogo(name?: string){
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

const Browser: React.FC<BrowserProps> = ({ name, version }) => {
  return(
    <div className='box-blue'>
      <h2 className='title'>Web Browser</h2>
      <div className="content">
        <img src={handleBrowserLogo(name)} alt='browser' />
        <p>
          {name}
          <span>
            {version}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Browser
