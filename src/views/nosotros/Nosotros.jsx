import React from 'react'
import Navbar from '../../components/nav/Navbar'
import Footer from '../../components/footer/Footer'
import './Nosotros.css'

export const Nosotros = () =>{
  return (
    <>
   
    <div className='container-nav'>
      <Navbar/>
    </div>

    
      {/* Sección Sobre Nuestra Empresa */}
      <div className='about-container'>
        <div className='about-header'>
          <h1>Sobre <span>Nuestra Empresa</span></h1>
          <p>
            En <strong>Almacenalo Ya</strong>, nos dedicamos a brindar servicios de almacenamiento y resguardo de bienes de alto valor.
            Con tecnología de vanguardia y estándares de seguridad excepcionales, protegemos lo que más importa para usted:
            joyas, automóviles de lujo, arte y todo tipo de posesiones valiosas.
          </p>
          <p>
            Contamos con instalaciones de clase mundial, diseñadas para resistir cualquier amenaza, y un equipo altamente 
            capacitado que garantiza confidencialidad, confianza y tranquilidad para nuestros clientes.
          </p>
        </div>

        {/* Sección Misión, Visión y Objetivo */}
        <div className='about-cards'>
          {/* Misión */}
          <div className='about-card'>
            <i className="fas fa-shield-alt"></i>
            <h3>Misión</h3>
            <p>
              Proporcionar un espacio seguro y confiable para el resguardo de bienes de alto valor, asegurando tranquilidad 
              y protección a través de tecnología de última generación y procesos rigurosos.
            </p>
          </div>

          {/* Visión */}
          <div className='about-card'>
            <i className="fas fa-eye"></i>
            <h3>Visión</h3>
            <p>
              Ser líderes en almacenamiento seguro a nivel global, reconocidos por nuestra innovación, excelencia en el 
              servicio y un compromiso inquebrantable con la seguridad y confianza de nuestros clientes.
            </p>
          </div>

          {/* Objetivo */}
          <div className='about-card'>
            <i className="fas fa-bullseye"></i>
            <h3>Objetivo</h3>
            <p>
              Garantizar la máxima seguridad y confidencialidad para bienes exclusivos, implementando 
              soluciones personalizadas que superen las expectativas del mercado de almacenamiento seguro.
            </p>
          </div>
        </div>

        {/* Beneficios Extras */}
        <div className='about-benefits'>
          <h2>¿Por qué elegir <span>Almacenalo Ya</span>?</h2>
          <ul>
            <li><i className="fas fa-lock"></i> Instalaciones con tecnología anti-intrusión y monitoreo 24/7.</li>
            <li><i className="fas fa-user-secret"></i> Personal altamente capacitado y confidencial.</li>
            <li><i className="fas fa-building"></i> Bóvedas físicas con certificación internacional.</li>
            <li><i className="fas fa-gem"></i> Almacenamiento especializado para joyas, vehículos, obras de arte y más.</li>
            <li><i className="fas fa-handshake"></i> Soluciones personalizadas adaptadas a cada cliente.</li>
          </ul>
        </div>
      </div>

    <div className='container-foot'>
      <Footer/>
    </div>
    </>
  )
}

export default Nosotros;
