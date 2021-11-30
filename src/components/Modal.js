import React,{useState} from 'react'
import { StyleCantidad } from '../styles/Boton.style'
import { ModalButon } from '../styles/Carrito.style'
import '../styles/Modal.style.css'
import { StyledDescripcion, StyleGlobal } from '../styles/Platos.style'
import { useContar } from '../hooks/useContar'
import { Link, useParams } from 'react-router-dom'

export const Modal = ({dataCar}) => {


const{cantidad, adicionar ,restar }= useContar(0); 

    
const {id}= useParams()
const filtro = dataCar.filter(x=>x.id === id)

const [modifica, setModifica] = useState({
    sabor :`${filtro.sabor}`,
    cantidades: ''  ,
    total: '',
    adicion: `${filtro.adicion}`,
})



const changeData = async()=>{
 await fetch(`https://srpint2.herokuapp.com/carrito/${id}`,{
    method:'PUT',
     body: JSON.stringify(modifica),
     headers:{
         "Content-Type": "application/json; charset = utf-8"
     }
 })
 alert('actualizacion exitoasa');

}
    return (
   <>
          <Link className='carrito' to='/carrito/'>🡨</Link>

<div className="dato">
    
    < ModalButon>    
    <div className="img">   
    <img src={filtro.imagen}  alt="" />
    <img src={filtro.imagen1}  alt="" />

    </div> 




<StyleCantidad>
<button className='boton menos'type='button' onClick={restar}>-</button>
     <h1> {modifica.cantidades= cantidad} </h1>
<button className='boton mas' type='button' onClick={adicionar}>+</button>

</StyleCantidad>




    <StyledDescripcion>
    <p className='nombre'>{filtro.sabor} </p>
    <p className='precio'>x {filtro.cantidades} </p>
    </StyledDescripcion>
    <button type="submit" onClick={changeData} className='boton-actualizar'>ACTUALIZAR</button>
</ModalButon>


</div>
<StyleGlobal carro/>

</>
   
    )
}
