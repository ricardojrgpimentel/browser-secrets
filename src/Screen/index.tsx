import React, { useMemo } from 'react'

interface Dimensions {
  width: string
  height: string
  lineHeight: string
}

function reduceRatio(width: number, height: number): string {
  let mdc, aux, divisor
  if (width === height) return '1 : 1'
  if (+width < +height) { aux = width; width = height; height = aux }
  mdc = (a, b) => { if (b === 0) return a; return mdc(b, a % b) }
  divisor = mdc(+width, +height)
  return typeof aux === 'undefined'
    ? (width / divisor) + ' : ' + (height / divisor)
    : (height / divisor) + ' : ' + (width / divisor)
}

function solve(width: number | undefined, height: number | undefined, num: number, den: number): number | undefined {
  if (width !== undefined) return Math.round(width / (num / den))
  if (height !== undefined) return Math.round(height * (num / den))
  return undefined
}

function ratio2css(num: number, den: number): Dimensions {
  let width, height
  if (+num > +den) {
    width = 64
    height = solve(width, undefined, num, den)
  } else {
    height = 64
    width = solve(undefined, height, num, den)
  }
  return {
    width: width + 'px',
    height: height + 'px',
    lineHeight: height + 'px'
  }
}

function Screen(){
  const dimensions = useMemo(() => ratio2css(window.screen.width, window.screen.height), [])

  const recWidth = dimensions.width
  const recHeight = dimensions.height
  const recLineHeight = dimensions.lineHeight

  return(
    <div className='box-blue'>
      <h2 className='title'>Screen Resolution</h2>
      <div className="content">
        <div className='tv' style={{width: recWidth, height: recHeight}}>
          <span style={{lineHeight: recLineHeight}}>Screen</span>
        </div>
        <ul>
          <li><p>Resolution: {window.screen.width}x{window.screen.height}</p></li>
          <li><p>Aspect Ratio: {reduceRatio(window.screen.width, window.screen.height)}</p></li>
          <li><p>Color Depth: {window.screen.colorDepth}</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Screen
