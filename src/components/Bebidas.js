
import React, { useState, useEffect } from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'

const Bebidas = () => {

// hook
const [Bebida, setBebida] = useState([])

useEffect(() => {
    fetch('https://srpint2.herokuapp.com/bebidas')
    .then(response => {
        return response.json();
    })
    .then((data)=>{
        setBebida(data);
        // console.log(data);
    })
    .catch(()=>{
        console.log("Un error mi bro!");
    })
   
}, [])



    return (
        <StyleContainer>
        {
           Bebida.map((bebida, i)=>{
            return (
            <StyleCard key={i}>    
            <div className="img">   
            <img src={bebida.imagen}  alt="" />
            </div> 
            <StyledDescripcion>
            <p className='nombre'> {bebida.sabor}</p>
            <p className='precio'> {bebida.precio}</p>
            </StyledDescripcion>
            </StyleCard>

            )
           })
        }
        </StyleContainer>
    )
}

export default Bebidas