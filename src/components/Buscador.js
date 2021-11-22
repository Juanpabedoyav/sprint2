import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 
import {StyledInput, StyledCaja} from '../styles/Buscador.style'
import { Link } from 'react-router-dom'

export const Buscador = () => {

    return (
        <StyledCaja>
            
            <Link to='/busqueda'><StyledInput 
            id="inputNombre" 
            type="text" 
            name="nombre"
            placeholder="Sabor de guajolota, bebida..." 
            /> 
            <FontAwesomeIcon className="busqueda" icon={faSearch}/>
            </Link>
        </StyledCaja>
    )
}