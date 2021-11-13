
import React from 'react'
import {NavLink} from 'react-router-dom'
import {StyleNav} from '../styles/Nav.style'

function Nav() {
    


    return (
       <StyleNav >
           <li>
           <NavLink 
           to="/tamales"
           className="">Tamales </NavLink>
           </li>
           <li>
           <NavLink 
           to="guajalotas"
           className="">Guajoalotas</NavLink>
           </li>
           <li>
           <NavLink 
           to="/bebidas"
           className="">Bebidas</NavLink>
            </li>
       </StyleNav>
    )
}

export default Nav