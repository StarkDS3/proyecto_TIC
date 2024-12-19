import React, {useEffect, useState} from 'react'
import './Testimonio.css'

export const Testimonio = ({datat}) => { { /* Llama props desde Index.jsx y datos de testimonio.json */}

  const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % datat.length )
      }, 7000)  /* Temporizador rotacion */
      return () => clearInterval(interval)
    }, [datat])

    const getClassname = (index) => {
      if (index === currentIndex) return 'center';
      if (index === (currentIndex + 1) % datat.length) return 'right';
      if (index === (currentIndex - 1 + datat.length) % datat.length) return 'left'; 
      return 'hidden'
    }

  return (
    
  <>

    {/* Forma de llamar datos con props, revisar el incio.jsx para mas claridad */}
    <div className="testimonial-slider">
      {datat.map (( datat, index) => (
        <div key={ datat.id } className={`testimonial-card ${getClassname(index)}`}>
        <img src= { datat.foto } 
        alt="Usuario" />
        <h3> {datat.nombre} </h3>
        <p> {datat.texto} </p>
        </div>

      ))}

    </div>
  </>
  )
}

export default Testimonio;


