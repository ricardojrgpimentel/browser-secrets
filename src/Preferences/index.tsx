import React, { useEffect, useState } from 'react'

interface PrefState {
  dark: boolean
  saveData: boolean | undefined
}

function Preferences(){
  const [pref, setPref] = useState<PrefState>({ dark: false, saveData: undefined })

  useEffect(() => {
    const darkMatch = window.matchMedia('(prefers-color-scheme: dark)')
    const updateDark = () => setPref(p => ({ ...p, dark: darkMatch.matches }))
    updateDark()
    darkMatch.addEventListener('change', updateDark)
    const saveData = (navigator as any).connection?.saveData
    setPref(p => ({ ...p, saveData }))
    return () => darkMatch.removeEventListener('change', updateDark)
  }, [])

  return(
    <div className='box-blue'>
      <h2 className='title'>Preferences</h2>
      <div className='content'>
        <img src='/img/ipaddress.svg' alt='pref' />
        <ul>
          <li><p>Dark Mode: {pref.dark ? 'yes' : 'no'}</p></li>
          {pref.saveData !== undefined ? <li><p>Data Saver: {pref.saveData ? 'on' : 'off'}</p></li> : null}
        </ul>
      </div>
    </div>
  )
}

export default Preferences
