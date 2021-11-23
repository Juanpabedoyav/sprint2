import React, { useEffect, useState } from 'react'
import { StyleCard, StyledDescripcion, StyleGlobal } from '../styles/Platos.style'
import { Link } from 'react-router-dom'
import { StyleCarrito, ModalButon } from '../styles/Carrito.style'
import { Modal } from './Modal'
import {useModal} from '../hooks/useModal'
import { StyleCantidad } from '../styles/Boton.style'
import { useContar } from '../hooks/useContar'
const Carrito = () => {
// hooks personalizados
const {abrir, abrirModal, cerrarModal}= useModal(false)
const{cantidad, adicionar ,restar }= useContar(0); 

const [dataCar, setDataCar] = useState([]);

const getData = async()=>{
const res = await fetch("https://srpint2.herokuapp.com/carrito")
const datos = await res.json();
setDataCar(datos)
   console.log(datos);  
}
useEffect(() => {
    getData();
}, [])

    return (
        <>
        <StyleCarrito >
            <Link  to='/'>🡨</Link>
           
            <h1 className="titulo">Carrito</h1>
            <div className="cards">
            {
                dataCar.map((el)=>{
                    return(
            <div onClick={abrirModal} className='carrito' key={el.id}>    
            <div className="img">   
            <img src={el.imagen}  alt="" />
            </div> 
            <StyledDescripcion>
            <p className='nombre'> </p>
            <p className='precio'> $ {el.adicion} MXN</p>
            </StyledDescripcion>
          

            </div>
            )
            })


            
}
</div>

<StyleCard className="cardCar">Total</StyleCard>
        </StyleCarrito>
<Modal abrir={abrir}  cerrar={cerrarModal}>
< ModalButon>    
            <div className="img">   
            <img src=""  alt="" />
            </div> 
    <StyleCantidad>
        <button className='boton menos'type='button' onClick={restar}>-</button>
                <h1>
              <input className='input-cantidad' 
                 type="number"
                  name="cantidades"
                  value={cantidad}
                    //   onChange={handleChange}
            /> 
             </h1> 
        <button className='boton mas' type='button' onClick={adicionar}>+</button>
  
    </StyleCantidad>
            <StyledDescripcion>
            <p className='nombre'> hola</p>
            <p className='precio'> $ {} MXN</p>
            </StyledDescripcion>
            <button className='boton-actualizar'>ACTUALIZAR</button>
</ModalButon>
</Modal>




<StyleGlobal/>

</>
    )
}

export default Carrito
