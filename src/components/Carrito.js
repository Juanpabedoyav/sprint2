import React, { useEffect, useState } from 'react'
import { StyleCard, StyledDescripcion, StyleGlobal } from '../styles/Platos.style'
import { Link } from 'react-router-dom'
import { StyleCarrito } from '../styles/Carrito.style'





const Carrito = ({dataCar}) => {
// hooks personalizados




    return (
        <>
<StyleCarrito >
            <Link  to='/'>🡨</Link>
           
<h1 className="titulo">Carrito</h1>

<div className="cards">
            {
                dataCar.map((el)=>{
                    return(
        <Link  to={`/carrito/detalle/${el.id}`} className='carrito' key={el.id}>    
          <StyledDescripcion>
                <div className="img">   
                    <img src={el.imagen}  alt="" />
                    <img src={el.imagen1}  alt="" />

                 </div> 
                    <p className='nombre'>{el.sabor} </p>
                     <p className='precio'>x {el.cantidades} </p>

                    <p className='precio'>{el.adicion} </p>
            </StyledDescripcion>
        </Link> 
   
            )
                })          
            }
</div>

<StyleCard className="cardCar">Total</StyleCard>
     

      
            
                

</StyleCarrito>

<StyleGlobal/>

</>
    )
}

export default Carrito
