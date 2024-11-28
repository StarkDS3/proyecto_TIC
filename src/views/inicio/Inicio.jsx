import React, { useState } from 'react'
import Navbar from '../../components/nav/Navbar'
import Servicios from '../servicios/Servicios.jsx';
import "./Inicio.css";

export const Inicio = () => {

  const [showServicios, setShowServicios] = useState(false); 
  const toggleServicios = () => { setShowServicios(!showServicios); };

  return (
    <>
      <Navbar/>
      <div className='fondo'>
          <div className='wlc'>
            <p className='p1'>
              <span className='d'>D</span>
              eseas pasar unas vacaciones tranquilo?&#128737;</p>

              <p className='p2'>¡Adquiere tu servicio de almacenamiento de bienes con nosotros!</p>
              <button className="btn" onClick={toggleServicios}>
              {showServicios ? 'Ocultar Servicios' : 'Descubre más'}
              </button>
          </div>
      </div>
      {showServicios && <Servicios/>}
    </>
  )
}

export default Inicio;
