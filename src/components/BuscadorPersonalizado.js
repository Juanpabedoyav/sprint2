import React from 'react'
import { Link } from 'react-router-dom'
import { StyleBuscador } from '../styles/Buscador.style'
import { StyleGlobal } from '../styles/Platos.style'
import { Buscador } from './Buscador'
const BuscadorPersonalizado = () => {
    return (
        <StyleBuscador>
           <StyleBuscador className="input">
            <Buscador/>
            </StyleBuscador>

<Link to="/"><p className='cancel'>Cancelar</p></Link>

            <StyleGlobal/>

        </StyleBuscador>
    )
}

export default BuscadorPersonalizado
