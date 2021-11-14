import React, { useState, useEffect } from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'
import { useGet } from '../hooks/useGet'

const Guajalotas = () => {

// hook
let url = 'https://srpint2.herokuapp.com/guajolotes'

let {getData} = useGet(url)

const handleClick = (target)=>{
console.log(target.button);
if (target.button === 0){
    console.log("hiciste click al plato");
}

}

    return (
        <StyleContainer>
        {
           getData.map((guaja)=>{
            return (
            <StyleCard onClick={handleClick} key={guaja.id}>    
            <div className="img">   
            <img src={guaja.imagen}  alt="" />
            </div> 
            <StyledDescripcion>
            <p className='nombre'> {guaja.sabor}</p>
            <p className='precio'> {guaja.precio}</p>
            </StyledDescripcion>
            </StyleCard>

            )
           })
        }
        </StyleContainer>
    )
}

export default Guajalotas
