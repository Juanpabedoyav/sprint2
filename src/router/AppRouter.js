
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tamales from '../components/Tamales'
import Bebidas from '../components/Bebidas'
import Guajalotas from '../components/Guajalotas'
import Carrito from '../components/Carrito'
import {FormVenta} from '../components/FormVenta'
import BuscadorPersonalizado from '../components/BuscadorPersonalizado'
import { FormVenta1 } from '../components/FormVenta1'
import Loading from '../components/Loading'
export const AppRouter = () => {
   
    const [isLoad, setIsLoad] = useState(true)
useEffect(() => {
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
            <Route path='/carrito'element={<Carrito/>} />
            <Route exact path='/detalle/:id/'element={<FormVenta />} />
            <Route exact path='/detalle/combo/:id/'element={<FormVenta1 />} />
            <Route path='/busqueda'element={<BuscadorPersonalizado/>} />

            </Routes> 
             </BrowserRouter>
    }
        </div>
    )
}