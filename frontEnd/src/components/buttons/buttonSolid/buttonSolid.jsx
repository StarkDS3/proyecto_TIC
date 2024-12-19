import React from 'react'
import "./buttonSolid.css"

const ButtonSolid = ({texto, click}) => {
  return (
    <button className='button_solid' onClick={click}>{texto}</button>
  )
}

export default ButtonSolid