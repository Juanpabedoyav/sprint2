import React from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'
import { useGet } from '../hooks/useGet'
import {useModal} from '../hooks/useModal'
import {Modal} from './Modal'
import {FormVenta} from './FormVenta'

const Tamales = () => {
    let {abrir, abrirModal, cerrarModal} = useModal(false)
    
    let url='https://srpint2.herokuapp.com/tamales'
    let {getData} = useGet(url);
    

    return (
       <><StyleContainer>
        {
           getData.map((tamal,i)=>{
            return (
            <StyleCard key={i} onClick={abrirModal}>    
            <div className="img">   
            <img src={tamal.imagen}  alt="" />
            </div> 
            <StyledDescripcion>
            <p className='nombre'> {tamal.sabor}</p>
            <p className='precio'> $ {tamal.precio} MXN</p>
            </StyledDescripcion>
            </StyleCard>

            )
           })
        }
        </StyleContainer>
         <Modal abrir={abrir} cerrar={cerrarModal}>
         <FormVenta />
         </Modal></>
    )
}

export default Tamales