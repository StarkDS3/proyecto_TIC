import React from 'react'
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import { Inicio } from './views/inicio/Inicio';
import {Nosotros} from './views/nosotros/Nosotros';
/*import { Servicios } from './views/servicios/Servicios';*/
import { Acceso } from './views/acceso/Acceso';
import { RedirectToWhatsapp } from './components/WebReference/RedirectToWhatsapp';
import { RedirectToGit } from './components/WebReference/RedirectToGit';
import { RedirectToYoutube } from './components/WebReference/RedirectToYoutube';
import { RedirectToX } from './components/WebReference/RedirectToX';
import { ProyectoTic } from './components/WebReference/ProyectoTic';

const RoutesCustom = () => {

  return (
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        {/*<Route path='/servicios' element={<Servicios/>}/>*/}
        <Route path='/acceso' element={<Acceso/>}/>
        <Route path='/whatsapp' element={ <RedirectToWhatsapp /> } />
        <Route path='/github' element={ <RedirectToGit/> } />
        <Route path='/youtube' element= { <RedirectToYoutube/> } />
        <Route path='/twitter' element= { <RedirectToX/> } />
        <Route path='/proyecto' element= { <ProyectoTic/> } />

    </Routes>
  )
}

export default RoutesCustom;
