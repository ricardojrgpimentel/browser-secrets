import React from 'react'

class Os extends React.Component{
  render(){
    return(
      <div className='box-blue'>
        <h2 className='title'>Operating System</h2>
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

export default Os
