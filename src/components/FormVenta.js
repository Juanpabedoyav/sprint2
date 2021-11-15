import React from 'react'
import { useGet } from '../hooks/useGet'
import {StyleForm} from '../styles/FormVenta.Style'
import { Modal } from './Modal'

export const FormVenta = () => {
    let url = 'https://srpint2.herokuapp.com/bebidas'
    let {getData} = useGet(url);
const compra=[];
const handleChange = ({target})=>{
console.log(target.checked);

if (target.checked === true){
    let add= 
{
    precio: target.value ,
};

compra.push(add);
    console.log("Agregsaste al carro", target.name, compra);
}else{
    compra.splice(target.value);
    console.log("Quitaste del carro un", target.name, compra);  
}

}

const handleSubmit = (e)=>{
    e.preventDefault();
    alert("se envio la compra")
}


    return (
<Modal>
            {/* <h1> Crud carro</h1> */}
            <StyleForm onSubmit={handleSubmit}>
            <div>
                        <h3>Guajolocombo</h3>
                        <p className="copy-combo">Selecciona la bebida que más te guste y disfruta de tu desayuno.</p>
        </div>
           {

            getData.map((elem)=>{
                return(
                    <>

                    
                    <div className="combo">
                            <div className="items">
                                <input
                                    key={elem.id}
                                    type="checkbox"
                                    name={elem.sabor}
                                    value={elem.precio}
                                    onChange={handleChange} />

                                <img src={elem.imagen} alt="" />
                                <p className="nombre">{elem.sabor}</p>
                                <p className="precio">+ ${elem.precio} MXN</p>
                            </div>

                        </div></>

            
                )

            })
    
}

        <button className="botton" type="submit ">Agregar al Carro</button>
        </StyleForm>
</Modal> 
    )


}
