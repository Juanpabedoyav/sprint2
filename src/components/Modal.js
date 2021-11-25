import React,{useEffect} from 'react'
import { StyleCantidad } from '../styles/Boton.style'
import { ModalButon } from '../styles/Carrito.style'
import '../styles/Modal.style.css'
import { StyledDescripcion, StyleGlobal } from '../styles/Platos.style'
import { useContar } from '../hooks/useContar'
import { Link, useParams } from 'react-router-dom'

export const Modal = ({dataCar}) => {
    const {id}= useParams()
const filtro = dataCar.find(x=>x.id ==id)
// console.log(id)
// const getData = ()=>{
// console.log(filtro)
// // dataCar();
// }

// useEffect(() => {
//     getData();
// }, [])

    const{cantidad, adicionar ,restar }= useContar(0); 

    return (
   <>
          <Link  to='/carrito/'>🡨</Link>
{
    filtro.map((el)=>{
        return(

    
    < ModalButon>    
    <div className="img">   
    <img src={el.imagen}  alt="" />
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
    <p className='nombre'>{el.nombre} </p>
    {/* <p className='precio'> </p> */}
    </StyledDescripcion>
    <button className='boton-actualizar'>ACTUALIZAR</button>
</ModalButon>
    )
})
}

<StyleGlobal/>

</>
   
    )
}
