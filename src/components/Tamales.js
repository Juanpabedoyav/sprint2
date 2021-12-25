import React, { useEffect, useState } from 'react'
import { StyleCard, StyleContainer, StyledDescripcion} from '../styles/Platos.style'
// import { useGet } from '../hooks/useGet'
// import {useModal} from '../hooks/useModal'
// import {Modal} from './Modal'
// import {FormVenta} from './FormVenta'
import {Link} from 'react-router-dom'

import App from '../containers/App'

const Tamales = () => {
   //  let {abrir, abrirModal, cerrarModal} = useModal(false)
const [data, setData] = useState([])


   const getData = async()=>{
      const res = await fetch('https://srpint2.herokuapp.com/tamales');
      const datos = await res.json();
      setData(datos);
      // tamal(data);
   } 
  useEffect(() => {
  getData();
  }, [])
   
   // let url='https://srpint2.herokuapp.com/tamales'
   //  let {getData} = useGet(url);
    

    return (
       <>
       <App/>
       <StyleContainer>
        {
           data.map((tamal )=>{
            return (
           <Link to={`/detalle/${tamal.sabor}`}><StyleCard key={tamal.id} >    
            <div className="img">   
            <img src={tamal.imagen}  alt="" />
            </div> 
            <StyledDescripcion>
            <p className='nombre'> {tamal.sabor}</p>
            <p className='precio'> $ {tamal.precio} MXN</p>
            </StyledDescripcion>
            </StyleCard></Link>

            )
           })
        }
        </StyleContainer>
        </>
        
    )
}

export default Tamales