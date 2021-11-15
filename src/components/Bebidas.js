
import React, { useState, useEffect } from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'
import { useGet } from '../hooks/useGet'

const Bebidas = () => {

// hook
let url='https://srpint2.herokuapp.com/bebidas'
let {getData} = useGet(url);

    return (
        <StyleContainer>
        {
           getData.map((bebida, i)=>{
            return (
            <StyleCard key={i}>    
            <div className="img">   
            <img src={bebida.imagen}  alt="" />
            </div> 
            <StyledDescripcion>
            <p className='nombre'> {bebida.sabor}</p>
            <p className='precio'> $ {bebida.precio} MXN</p>
            </StyledDescripcion>
            </StyleCard>

            )
           })
        }
        </StyleContainer>
    )
}

export default Bebidas