
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Tamales from '../components/Tamales'
import Bebidas from '../components/Bebidas'
import Guajalotas from '../components/Guajalotas'

export const AppRouter = () => {
    return (
        <div>
                <BrowserRouter>
                <Nav/>
             <Routes>
        <Route path='/tamales' element={<Tamales/>}/>
        <Route path='/guajalotas' element={<Guajalotas/>}/>
        <Route path='/bebidas'element={<Bebidas/>} />

            </Routes> 
                </BrowserRouter>

        </div>
    )
}