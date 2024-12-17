import React, { useEffect } from 'react'

export const RedirectToX = () => {
  
    useEffect (() => {
        window.location.href = 'https://x.com/?lang=es' /*Redirige a twitter*/
    }, [])
  
    return null
}
