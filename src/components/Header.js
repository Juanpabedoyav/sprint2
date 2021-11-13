import React from 'react'
import logo from '../assets/logo.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import  { StyleHeader } from '../styles/Header.style'


export const Header = () => {
    return (
        <StyleHeader>
            <div>
            <img src={logo} alt="" />
            </div>
            <div>
            {/* <FontAwesomeIcon className="car" icon={faShoppingCart}/> */}
            </div>  
  
        </StyleHeader>
        
    )
}