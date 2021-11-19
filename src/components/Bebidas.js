
import React  from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'
import { useGet } from '../hooks/useGet'
import {useModal} from '../hooks/useModal'
import {Modal} from './Modal'

const Bebidas = () => {

// hooks

let url='https://srpint2.herokuapp.com/bebidas'
let {getData} = useGet(url);

//hook modal
let{abrir, abrirModal, cerrarModal}=useModal(false)



    return (
      <><StyleContainer>
        {
           getData.map((bebida, i)=>{
            return (
            <StyleCard onClick={abrirModal} key={i}>    
            <div className="img">   
            <img src={bebida.imagen}  alt="" />
            </div> 
            <StyledDescripcion>
            <p className='nombre'> {bebida.sabor}</p>
            <p className='precio'> $ {bebida.precio} MXN</p>
            </StyledDescripcion>
            </StyleCard>

            )
           })
        }
        </StyleContainer>
        <Modal abrir={abrir} cerrar={cerrarModal}>
            <h1>Es Hora de crear tu combo</h1>
        </Modal></>
    )
}

export default Bebidas