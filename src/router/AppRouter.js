
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Nav from '../components/Nav'
import Tamales from '../components/Tamales'
import Bebidas from '../components/Bebidas'
import Guajalotas from '../components/Guajalotas'
import Carrito from '../components/Carrito'
import {FormVenta} from '../components/FormVenta'
import BuscadorPersonalizado from '../components/BuscadorPersonalizado'
export const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
      
            <Routes>
            <Route path='/' element={<Tamales/>}/>
            <Route path='/tamales' element={<Tamales/>}/>
            <Route path='/guajalotas' element={<Guajalotas/>}/>
            <Route path='/bebidas'element={<Bebidas/>} />
            <Route path='/carrito'element={<Carrito/>} />
            <Route path='/detalle'element={<FormVenta/>} />
            <Route path='/busqueda'element={<BuscadorPersonalizado/>} />

            </Routes> 
             </BrowserRouter>

        </div>
    )
}