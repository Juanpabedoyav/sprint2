
import React  from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'
import { useGet } from '../hooks/useGet'
// import {useModal} from '../hooks/useModal'
// import {Modal} from './Modal'
import App from '../containers/App'
import {Link} from 'react-router-dom'

const Bebidas = () => {

// hooks

let url='https://srpint2.herokuapp.com/bebidas'
let {getData} = useGet(url);

//hook modal
// let{abrir, abrirModal, cerrarModal}=useModal(false)



    return (
      <>
      <App/>
      <StyleContainer>
        {
           getData.map((bebida)=>{
            return (
            <Link to="/detalle/">
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