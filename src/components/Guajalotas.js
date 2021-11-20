import React from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'
import { useGet } from '../hooks/useGet'
// import {useModal} from '../hooks/useModal'
// import {FormVenta} from './FormVenta'
// import { Modal } from './Modal'
import {Link} from 'react-router-dom'

import App from '../containers/App'
const Guajalotas = () => {

// hook data
let url = 'https://srpint2.herokuapp.com/guajolotes'
let {getData} = useGet(url)

//hook modal
// let {abrir, abrirModal,     cerrarModal} = useModal(false)

    return (
        
        <>
        <App/>
        <StyleContainer>
            {getData.map((guaja) => {
                return (

                    <Link to="/detalle/">
                    <StyleCard  key={guaja.id}>
                        <div className="img">
                            <img src={guaja.imagen} alt="" />
                        </div>
                        <StyledDescripcion>
                            <p className='nombre'> {guaja.sabor}</p>
                            <p className='precio'> ${guaja.precio} MXN</p>
                        </StyledDescripcion>
                    </StyleCard>
                    </Link>

                )
            })}
           
        </StyleContainer>
    </>
    )
}

export default Guajalotas
