import React from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'
import { useGet } from '../hooks/useGet'
import {useModal} from '../hooks/useModal'
import {FormVenta} from './FormVenta'
import { Modal } from './Modal'

const Guajalotas = () => {

// hook data
let url = 'https://srpint2.herokuapp.com/guajolotes'
let {getData} = useGet(url)
//hook modal
let {abrir, abrirModal, cerrarModal} = useModal(false)
// funcion click para activar modal
// const handleClick = (target)=>{
// console.log(target.button);
// if (target.button === 0){
//     console.log("hiciste click al plato");
// }

// }

    return (
        <><StyleContainer>
            {getData.map((guaja) => {
                return (

                    <StyleCard onClick={abrirModal} key={guaja.id}>
                        <div className="img">
                            <img src={guaja.imagen} alt="" />
                        </div>
                        <StyledDescripcion>
                            <p className='nombre'> {guaja.sabor}</p>
                            <p className='precio'> ${guaja.precio} MXN</p>
                        </StyledDescripcion>
                    </StyleCard>

                )
            })}
           
        </StyleContainer>
    <Modal abrir={abrir} cerrar={cerrarModal}>
         <FormVenta />
     </Modal>
     </>
    )
}

export default Guajalotas
