import React from 'react'

class Browser extends React.Component{
  render(){
    return(
      <div className='box-blue'>
        <h2 className='title'>Web Browser</h2>
        <p>
          {this.props.name}
          <span>
            {this.props.version}
          </span>
        </p>
      </div>
    )
  }
}

export default Browser
