import React from 'react'
import logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import  { StyleHeader } from '../styles/Header.style'
import {useModal} from '../hooks/useModal'
import {Modal} from './Modal'
export const Header = () => {

let {abrir, abrirModal, cerrarModal} = useModal(false);
    return (
       <><StyleHeader>
            <div>
            <img src={logo} alt="" />
            </div>
            <div>
            <FontAwesomeIcon onClick={abrirModal} className="car" icon={faShoppingCart}/>
            </div>  
  
        </StyleHeader>
        <Modal abrir={abrir} cerrar={cerrarModal}>
        <h1>Bienvenido Al Carrito </h1>

        </Modal></>
        
    )
}