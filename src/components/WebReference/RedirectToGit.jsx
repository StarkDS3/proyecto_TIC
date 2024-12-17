import React, { useEffect } from 'react'

export const RedirectToGit = () => {

    useEffect (() => {
        window.location.href = 'https://github.com/StarkDS3' /*Redirige a mi perfil GitHub*/
    }, [])

  return  null 
}
