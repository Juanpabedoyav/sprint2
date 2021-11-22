import React, { useState } from 'react'


export const useForm = () => {
    const [datos, setDatos] = useState({
        sabor :'',
        cantidades:'',
        precio: '',
        adicion: ' '
    })
    const handleChange=({target})=>{
        setDatos({
            ...datos,
            [target.name]: target.value,
        })
    }
    return [
     datos,
     handleChange
    ]
}
