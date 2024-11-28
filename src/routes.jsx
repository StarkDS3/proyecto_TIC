import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Inicio } from './views/inicio/Inicio';
import {Nosotros} from './views/nosotros/Nosotros';
import { Servicios } from './views/servicios/Servicios';
import { Acceso } from './views/acceso/Acceso';

const RoutesCustom = () => {
  return (
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/acceso' element={<Acceso/>}/>
    </Routes>
  )
}

export default RoutesCustom;
