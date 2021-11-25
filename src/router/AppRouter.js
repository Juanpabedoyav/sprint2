
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tamales from '../components/Tamales'
import {Modal} from '../components/Modal'
import Bebidas from '../components/Bebidas'
import Guajalotas from '../components/Guajalotas'
import Carrito from '../components/Carrito'
import {FormVenta} from '../components/FormVenta'
import BuscadorPersonalizado from '../components/BuscadorPersonalizado'
import { FormVenta1 } from '../components/FormVenta1'
import Loading from '../components/Loading'
export const AppRouter = () => {
   
    const [dataCar, setDataCar] = useState([]);

const getData = async()=>{
const res = await fetch("https://srpint2.herokuapp.com/carrito")
const datos = await res.json();
setDataCar(datos)
}

    const [isLoad, setIsLoad] = useState(true)
useEffect(() => {
    getData();
  setTimeout(() => {
      setIsLoad(false);
  },2800);
    })

    return (
        <div>
            {
             isLoad ? <Loading/>
            :
            
            
            <BrowserRouter>
                
            <Routes>
            <Route path='/' element={<Tamales/>}/>
            <Route path='/tamales' element={<Tamales />}/>
            <Route path='/guajalotas' element={<Guajalotas />}/>
            <Route path='/bebidas'element={<Bebidas />} /> 
            <Route path='/carrito'element={<Carrito dataCar={dataCar}/>} />
            <Route exact path='/detalle/:id/'element={<FormVenta />} />
            <Route exact path='/detalle/combo/:id/'element={<FormVenta1 />} />
            <Route path='/carrito/detalle/:id'element={<Modal dataCar={dataCar}/>} />
            <Route path='/busqueda'element={<BuscadorPersonalizado/>} />

            </Routes> 
             </BrowserRouter>
    }
        </div>
    )
}