import React, { useEffect, useState } from 'react'

interface GpuInfo {
  vendor: string
  renderer: string
}

function WebGLInfo(){
  const [info, setInfo] = useState<GpuInfo | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setError('WebGL not supported')
      return
    }
    const ext = gl.getExtension('WEBGL_debug_renderer_info') as any
    if (ext) {
      setInfo({
        vendor: gl.getParameter(ext.UNMASKED_VENDOR_WEBGL),
        renderer: gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)
      })
    } else {
      setError('Renderer info not available')
    }
  }, [])

  return(
    <div className='box-blue'>
      <h2 className='title'>WebGL</h2>
      <div className='content'>
        <img src='/img/cpu.svg' alt='webgl' />
        {error ? <p>{error}</p> : info ? (
          <ul>
            <li><p>Vendor: {info.vendor}</p></li>
            <li><p>Renderer: {info.renderer}</p></li>
          </ul>
        ) : <p>Loading...</p>}
      </div>
    </div>
  )
}

export default WebGLInfo
