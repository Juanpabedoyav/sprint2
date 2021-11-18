import React from 'react'
import '../styles/Modal.style.css'
export const Modal = ({children, abrir, cerrarModal}) => {
    return (
        <>
            <div className= {`modal ${abrir && "abrir"}`}>
            <div className="container">
             <button className="close" onClick={cerrarModal}>🡨</button>
            {children} 
            </div>
            </div>  
        </>      
     
    )
}
