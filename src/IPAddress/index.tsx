import React, { useEffect, useState } from 'react'

interface IPAddressState {
  userIP: string | null
  error: string | null
}

function IPAddress(){
  const [userIP, setUserIP] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://api.ipify.org/?format=json')
      .then(res => res.json())
      .then(out => setUserIP(out.ip))
      .catch(err => {
        setError('Fail to get IP')
        console.error(err)
      })
  }, [])

  return(
    <div className='box-blue'>
      <h2 className='title'>IP Address</h2>
      <div className="content">
        <img src='/img/ipaddress.svg' alt='browser' />
        {error ? (
          <p>{error}</p>
        ) : userIP ? (
          <p>{userIP}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default IPAddress
