import React from 'react'

class Screen extends React.Component{

	reduceRatio(width, heigth) {
	let mdc, aux, divisor
	if (width === heigth)
	  return '1 : 1'
	// make width always the large number, to the left
	if (+width < +heigth) {
	  aux = width
	  width = heigth
	  heigth = aux;
	}
	mdc = (a, b) => {
	  if (b === 0)
	    return a
	  return mdc(b, a % b)
	}
	divisor = mdc(+width, +heigth)
	return 'undefined' === typeof aux ? (width / divisor) + ' : ' + (heigth / divisor) : (heigth / divisor) + ' : ' + (width / divisor)
	}

	ratio2css(num, den) {
        let width, height;
        if (+num > +den) {
            width = 64
            height = this.solve(width, undefined, num, den)
        } else {
            height = 64
            width = this.solve(undefined, height, num, den)
        }
        return {
            width: width + 'px',
            height: height + 'px',
            lineHeight: height + 'px'
        }
    }


    solve(width, height, num, den) {
        // solve for width
        if (undefined !== width) {
            return Math.round(width / (num / den))
        }
        // solve for height
        else if (undefined !== height) {
            return Math.round(height * (num / den))
        } else {
            return undefined
        }
    }

	render(){

		let dimensions = this.ratio2css(window.screen.width, window.screen.height)

		let recWidth = dimensions.width
		let recHeight = dimensions.height
		let recLineHeight = dimensions.lineHeight


		return(
		  <div className='box-blue'>
		    <h2 className='title'>Screen Resolution</h2>
		    <div className="content">
          		<div className='tv' style={{width: recWidth, height: recHeight}}>
					<span style={{lineHeight: recLineHeight}}>Screen</span>
          		</div>
			    <ul>
			    	<li><p>Resolution: {window.screen.width}x{window.screen.height}</p></li>
				    <li><p>Aspect Ratio: {this.reduceRatio(window.screen.width, window.screen.height)}</p></li>
				    <li><p>Color Depth: {window.screen.colorDepth}</p></li>
			    </ul>
			</div>
		  </div>
		)
	}
}

export default Screen
