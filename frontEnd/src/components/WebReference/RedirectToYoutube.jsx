import React, { useEffect } from 'react'

export const RedirectToYoutube = () => {
  
    useEffect (() => {
        window.location.href = 'https://www.youtube.com' /*Redirige a youtube*/
    }, [])
  
    return null
}
