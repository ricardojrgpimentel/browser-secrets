import React from 'react'

class IPAddress extends React.Component{

  constructor(){
    super()
    this.state = {
      userIP: null,
      error: null
    }
  }

  componentWillMount(){

    const request = new Request('http://api.ipify.org/?format=json', {
      method: 'GET'
    })

    fetch(request)
    .then(res => res.json())
    .then((out) => {
      this.setState({
        userIP: out.ip
      })
    })
    .catch(err => {
      this.setState({
        error: "Fail to get IP"
      }, () => {console.error(err)})
    })
  }

  render(){
    return(
      <div className='box-blue'>
        <h2 className='title'>IP Address</h2>
        {this.state.error ?
          <p>{this.state.error}</p> :
          this.state.userIP ?
          <p>{this.state.userIP}</p> :
          <p>Loading...</p>}
      </div>
    )
  }
}

export default IPAddress
