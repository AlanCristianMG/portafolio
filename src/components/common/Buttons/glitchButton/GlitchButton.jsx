import React from 'react'
import './glitchButton.css'
function GlitchButton({text, onclick}) {
    return (
        <button onClick={onclick} className='button-g'>
            {text}
        </button>
    )
}

export default GlitchButton
