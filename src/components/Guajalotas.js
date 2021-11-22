import React, { useEffect, useState } from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'
// import { useGet } from '../hooks/useGet'
// import {useModal} from '../hooks/useModal'
// import {FormVenta} from './FormVenta'
// import { Modal } from './Modal'
import {Link} from 'react-router-dom'

import App from '../containers/App'
const Guajalotas = () => {
// hook data
// let url = 
// let {getData} = useGet(url)
const [data, setData] = useState([])

const getData = async()=>{
    const res = await fetch('https://srpint2.herokuapp.com/guajolotes');
    const datos = await res.json();
    setData(datos);
    // info(datos);
 } 
useEffect(() => {
getData();
}, [])
//hook modal
// let {abrir, abrirModal,     cerrarModal} = useModal(false)

    return (
        
        <>
        <App/>
        <StyleContainer>
            {data.map((guaja) => {
                return (

                    <Link to={`/detalle/${guaja.sabor}`}>
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
