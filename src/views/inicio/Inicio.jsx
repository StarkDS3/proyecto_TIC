import React from 'react'
import Navbar from '../../components/nav/Navbar'
import "./Inicio.css";
import { Servicios } from '../../sections/servicios/Servicios';
import  datos  from "../../data/servicios.json";
import  datos2 from "../../data/testimonios.json"
import { Scroll } from '../../components/scroll/Scroll';
import { Whatsapp } from '../../components/whatsapp/Whatsapp';
import { Testimonio } from '../../sections/testimonios/Testimonio';
import { Footer } from '../../components/footer/Footer';


export const Inicio = () => {
  return (
    <>

      {/* Navbar */}
      <Navbar/>

      {/* Chat contact */}
      <div className='container-whatsapp'>
        <Whatsapp/>
      </div>

      {/* Hero section */}
      <div className='fondo'>
          <div className='wlc'>
            <p className='p1'>
              <span className='d'>D</span>
              eseas pasar unas vacaciones tranquilo?&#128737;</p>

              <p className='p2'>¡Adquiere tu servicio de almacenamiento de bienes con nosotros!</p>
              <button className="btn">
                Descubre mas
              </button>
          </div>

        {/* Scroll */}
        <div className='container-scroll'>
          <Scroll />
        </div>

      </div>


      <div className='slogan-services'>
          <div className='a-service'>
              <p className='s-title-main'>Nuestros Servicios</p>

              <p className='d-service'>
              Nuestro portafolio ofrece un servicio confiable y seguro para la administración y resguardo de tus bienes más importantes. 
              Nos enfocamos en brindar tranquilidad, protección y organización, adaptándonos a tus necesidades para que cuentes con el respaldo que mereces.
              </p>
              </div>
      </div>

      {/* <Servicios /> */}
      <div className='container-services'>
        { datos.map ( (data) =>(
          <Servicios
            key={data.id}
            titulo={data.titulo}
            descripcion={data.descripcion}
            icono={data.icono}
          />
        )
        )}
      </div>

      {/* Testimonio */}
      {/* Forma de llamar los datos del .json */}
      {/* <div className='container-test'>
        { datos2.map ( (data) =>(
          <Testimonio 
            key={data.id}
            nombre={data.nombre}
            texto={data.texto}
            foto={data.foto}
          />
        ))}
      </div> */}

      <div className='container-test'>   
          <Testimonio datat = {datos2} />  
      </div>

      {/* Footer */}
      <div className='container-footer'>
          <Footer />
      </div>

    </>
  )
}

export default Inicio;
