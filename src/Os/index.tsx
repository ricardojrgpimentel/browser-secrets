import React from 'react'

interface OsProps {
  name?: string
  version?: string
}

function handleOSLogo(name?: string){
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
    case 'Android':
      return '/img/android.svg'
    default:
      return '/img/windows.svg'
  }
}

const Os: React.FC<OsProps> = ({ name, version }) => {
  return(
    <div className='box-blue'>
      <h2 className='title'>Operating System</h2>
      <div className="content">
        <img src={handleOSLogo(name)} alt='os' />
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

export default Os
