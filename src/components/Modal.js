import React from 'react'
import  {StyleModal} from '../styles/Modal.style'
export const Modal = ({children}) => {
    return (
        <>
            <StyleModal >
            <div className="container">
             <button type="button" className="close-modal">🡨</button>
            {children} 
            </div>
            </StyleModal>  
        </>      
     
    )
}
