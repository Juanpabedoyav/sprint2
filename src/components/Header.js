import React from 'react'
import logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import  { StyleHeader } from '../styles/Header.style'
// import {useModal} from '../hooks/useModal'
import {Link} from 'react-router-dom'
// import {Modal} from './Modal'
export const Header = () => {

// let {abrir, abrirModal, cerrarModal} = useModal(false);
    return (
       <StyleHeader>
            <div>
            <Link to="/">
            <img src={logo} alt="logo" />
            </Link>
            </div>
            <div>
            <Link to='/carrito'><FontAwesomeIcon  className="car" icon={faShoppingCart}/></Link>
            </div>  
  
        </StyleHeader>
        
    )
}