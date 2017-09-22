import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import './style.css'

class MainApp extends React.Component{
	render(){
		return(
			<div className='main-wrap'>
				<div className="section1">
					<div className="main-header">
						<h1 className='title'>Browser Secrets</h1>
						<p className="message">Everything the internet knows about you from your Browser</p>
					</div>
				</div>
				
			</div>
		)
	}
}

export default MainApp