import React, { useEffect } from 'react'

export const RedirectToWhatsapp = () => {

    useEffect (() => {
        window.location.href = 'https://wa.me/3158139609' /*Redirige a whatsapp*/
    }, [])
  
    return null

}

