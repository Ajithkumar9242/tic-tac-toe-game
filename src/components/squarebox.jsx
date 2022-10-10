import React from 'react'
import './squarebox.css'

function Squarebox(props) {
  return (
    <span className='square' onClick={props.onClick}>
        {props.state}
    </span>
  )
}

export default Squarebox