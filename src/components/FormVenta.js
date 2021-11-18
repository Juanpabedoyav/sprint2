import React from 'react'
import { useGet } from '../hooks/useGet'
import {StyleForm} from '../styles/FormVenta.Style'
// import { Modal } from './Modal'
// import { useModal } from '../hooks/useModal'




export const FormVenta = () => {
    // hook useGet
    let url = 'https://srpint2.herokuapp.com/bebidas'
    let {getData} = useGet(url);

    //hook useModal
    // const {abrir, abrirModal, cerrarModal} = useModal(false)



const compra=[];//constanta para guardar checkbox 
// manipulo los inptuspara conocer valor
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
// funcion de envio de formulario
const handleSubmit = (e)=>{
    e.preventDefault();
    alert("se envio la compra")
}

    return (
//  modal con pror{children}       
       
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
        

    )


}
