import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 
import {StyledInput, StyledCaja} from '../styles/Buscador.style'

export const Buscador = () => {

    return (
        <StyledCaja>
            
            <StyledInput 
            id="inputNombre" 
            type="text" 
            name="nombre"
            placeholder="Sabor de guajolota, bebida..." 
            /> 
            <FontAwesomeIcon className="busqueda" icon={faSearch}/>
    
        </StyledCaja>
    )
}