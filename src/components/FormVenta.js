import React from 'react'
import { useGet } from '../hooks/useGet'

export const FormVenta = () => {
    let url = 'https://srpint2.herokuapp.com/bebidas'
    let {getData} = useGet(url);


    // console.log(getData);


    return (
        <div>
            <h1> Crud carro</h1>
{
            getData.map((elem)=>{
                return(
                    <div>
                    <li>{elem.sabor}</li>
                    <img src={elem.imagen} alt="" />
                    </div>

                
                )

            })
    
}
        </div>
    )
}
