import React from 'react'
import { StyleGlobal } from '../styles/Platos.style'
import { Link } from 'react-router-dom'
import { StyleCarrito } from '../styles/Carrito.style'
const Carrito = () => {
    return (

        <StyleCarrito>
            <Link  to='/'>🡨</Link>
            <h1 className="titulo">carrito</h1>
            <StyleGlobal/>

        </StyleCarrito>

    )
}

export default Carrito
