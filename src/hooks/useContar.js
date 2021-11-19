import  { useState } from 'react'

export const useContar = () => {

const [cantidad, setCantidad] = useState(0)

const adicionar = ()=> setCantidad(cantidad + 1)
const restar = ()=> setCantidad(cantidad -1 )

    return {
        cantidad,
        adicionar,
        restar
}
}
