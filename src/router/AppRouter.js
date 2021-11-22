
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Tamales from '../components/Tamales'
import Bebidas from '../components/Bebidas'
import Guajalotas from '../components/Guajalotas'

export const AppRouter = () => {
    const [tamal, setTamal] = useState([]);

    return (
        <div>
                <BrowserRouter>
                <Nav/>
             <Routes>
            <Route path='/' element={<Tamales/>}/>
        <Route path='/tamales' element={<Tamales tamal={setTamal}/>}/>
        <Route path='/guajalotas' element={<Guajalotas/>}/>
        <Route path='/bebidas'element={<Bebidas/>} />

            </Routes> 
                </BrowserRouter>

        </div>
    )
}