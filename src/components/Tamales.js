import React, { useState, useEffect } from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'
import { useGet } from '../hooks/useGet'

const Tamales = () => {
  
  
    let url='https://srpint2.herokuapp.com/tamales'
    let {getData} = useGet(url);
    

    return (
        <StyleContainer>
        {
           getData.map((tamal,i)=>{
            return (
            <StyleCard key={i}>    
            <div className="img">   
            <img src={tamal.imagen}  alt="" />
            </div> 
            <StyledDescripcion>
            <p className='nombre'> {tamal.sabor}</p>
            <p className='precio'> {tamal.precio}</p>
            </StyledDescripcion>
            </StyleCard>

            )
           })
        }
        </StyleContainer>
    )
}

export default Tamales