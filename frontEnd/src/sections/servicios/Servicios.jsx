import React from 'react'
import './Servicios.css';

export const Servicios = ({titulo, descripcion, icono}) => {
  return (
<>  

<div className='service-card'>
    <div className='resource'>
        <img 
        src= { icono } 
        alt="Icono" 
        />
    </div>

    <div className='service-info'>
        <p className='service-title'>
            { titulo }
        </p>

        <p className='description'>
            { descripcion }
        </p>  
    </div>
</div>

</>
      );
    
}

export default Servicios;
