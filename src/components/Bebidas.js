
import React, { useEffect, useState }  from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'
// import { useGet } from '../hooks/useGet'
// import {useModal} from '../hooks/useModal'
// import {Modal} from './Modal'
import App from '../containers/App'
import {Link} from 'react-router-dom'

const Bebidas = () => {

// hooks
const [data, setData] = useState([])

const getData = async()=>{
    const res = await fetch('https://srpint2.herokuapp.com/bebidas');
    const datos = await res.json();
    setData(datos);
 } 
useEffect(() => {
getData();
}, [])
//hook modal
// let{abrir, abrirModal, cerrarModal}=useModal(false)



    return (
      <>
      <App/>
      <StyleContainer>
        {
           data.map((bebida)=>{
            return (
            <Link to={`/detalle/combo/${bebida.sabor}`}>
            <StyleCard  key={bebida.id}>    
            <div className="img">   
            <img src={bebida.imagen}  alt="" />
            </div> 
            <StyledDescripcion>
            <p className='nombre'> {bebida.sabor}</p>
            <p className='precio'> $ {bebida.precio} MXN</p>
            </StyledDescripcion>
            </StyleCard>
            </Link>
            )
           })
        }
        </StyleContainer>
        </>
    )
}

export default Bebidas