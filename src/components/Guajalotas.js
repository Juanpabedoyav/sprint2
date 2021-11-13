import React, { useState, useEffect } from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'

const Guajalotas = () => {

// hook
const [Guajalotas, setGuajalotas] = useState([])

useEffect(() => {
    fetch('https://srpint2.herokuapp.com/guajolotes')
    .then(response => {
        return response.json();
    })
    .then((data)=>{
        setGuajalotas(data);
        // console.log(data);
    })
    .catch(()=>{
        console.log("Un error mi bro!");
    })
   
}, [])



    return (
        <StyleContainer>
        {
           Guajalotas.map((guaja, i)=>{
            return (
            <StyleCard key={i}>    
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
