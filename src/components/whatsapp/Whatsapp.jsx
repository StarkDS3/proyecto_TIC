import React from 'react'
import './Whatsapp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp  } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

export const Whatsapp = () => {
  return (
    <>
    <div className='container-what'>

    <Link to={"/whatsapp"} className='btn-w'>
          <div className='sign'>
          <FontAwesomeIcon className='icon-wa'
          icon={faWhatsapp } 
          />
          </div>

          <div className='descript-wa'>
              <p className='wa'>Whatsapp</p>
            </div>
      </Link>

    </div>
      


    </>
  )
}
