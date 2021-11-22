import React, { useState, useEffect } from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'

const Tamales = ({tamal}) => {

// hook
const [Tamales, setTamales] = useState([])

useEffect(() => {
    fetch('https://srpint2.herokuapp.com/tamales')
    .then(response => {
        return response.json();
    })
    .then((data)=>{
        setTamales(data);
        // console.log(data);
    })
    .catch(()=>{
        console.log("Un error mi bro!");
    })
   
}, [])



    return (
        <StyleContainer>
        {
           Tamales.map((tamal,i)=>{
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