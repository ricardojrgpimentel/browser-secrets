import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import './style.css'
import parser from 'ua-parser-js'

class MainApp extends React.Component{

	render(){
		
		let ua = parser()
		console.log(ua)

		return(
			<div className='main-wrap'>
				<div className="section1">
					<div className="main-header">
						<h1 className='title'>Browser Secrets</h1>
						<p className="message">Everything the internet knows about you from your Browser</p>
					</div>
				</div>
				<div className="section2">
					<div className="container">
						<p>Browser: {ua.browser.name}</p>
						<p>Browser: {ua.browser.version}</p>
						<p>CPU: {ua.cpu.architecture}</p>
						<p>Device: {ua.device.model}</p>
						<p>Device: {ua.device.type}</p>
						<p>Device: {ua.device.vendor}</p>
						<p>OS: {ua.os.name}</p>
						<p>OS: {ua.os.version}</p>
						{console.log(navigator)}
						{/* navigator.plugins.map((plugin, idx) => {
							return(
								<p>{plugin.name}</p>
							)
						}) */}
					</div>
				</div>
			</div>
		)
	}
}

export default MainApp