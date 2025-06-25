import React, { useMemo } from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import './style.css'
import parser from 'ua-parser-js'
import Browser from '../Browser'
import IPAddress from '../IPAddress'
import Os from '../Os'
import Device from '../Device'
import Screen from '../Screen'
import TimeLocale from '../TimeLocale'
import Hardware from '../Hardware'
import Geo from '../Geo'
import Network from '../Network'
import Tracking from '../Tracking'
import Plugins from '../Plugins'
import Referrer from '../Referrer'
import Battery from '../Battery'
import Orientation from '../Orientation'
import WebGLInfo from '../WebGLInfo'
import MediaDevices from '../MediaDevices'
import Storage from '../Storage'
import Preferences from '../Preferences'
import Offline from '../Offline'

const MainApp: React.FC = () => {
  const ua = useMemo(() => parser(), [])

  return (
    <div className='main-wrap'>
      <div className="section2">
        <div className="main-header">
          <h1 className='title'>Browser Secrets</h1>
          <p className="message">Everything the internet knows about you from your Browser</p>
        </div>
      </div>
      <div className="section1">
        <div className="container">
          <div className='row'>
            <div className='col-md-6 col-xl-4'>
              <Browser name={ua.browser.name} version={ua.browser.version} />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Os name={ua.os.name} version={ua.os.version} />
            </div>
            <div className='col-md-6 col-xl-4'>
              <IPAddress />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Screen />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Device architecture={ua.cpu.architecture} model={ua.device.model} type={ua.device.type} vendor={ua.device.vendor} />
            </div>
            <div className='col-md-6 col-xl-4'>
              <TimeLocale />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Hardware />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Geo />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Network />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Tracking />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Plugins />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Referrer />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Battery />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Orientation />
            </div>
            <div className='col-md-6 col-xl-4'>
              <WebGLInfo />
            </div>
            <div className='col-md-6 col-xl-4'>
              <MediaDevices />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Storage />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Preferences />
            </div>
            <div className='col-md-6 col-xl-4'>
              <Offline />
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="main-footer">
          <p className='message'>Made by Ricardo Pimentel</p>
          <p className='message'>Powered by React</p>
        </div>
      </div>
    </div>
  )
}

export default MainApp
