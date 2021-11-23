import React from 'react'
import '../styles/Modal.style.css'
export const Modal = ({children, abrir, cerrar}) => {

    return (
        <>
            <div className= {`modal ${abrir && "abrir"}`}>
            <div className="container">
             <button className="close" onClick={cerrar}>🡨</button>
            {children} 
            </div>
            </div>  
        </>      
     
    )
}
