import React from 'react'
import { useContar } from '../hooks/useContar'
import { useGet } from '../hooks/useGet'
import {StyleForm} from '../styles/FormVenta.Style'
import {StyleCantidad} from '../styles/Boton.style'
import flavorverde from '../assets/flavorverde.svg'
import flavorrajas from '../assets/flavorrajas.svg'
import flavorpiña from '../assets/flavorpiña.svg'
import flavorpasas from '../assets/flavorpasas.svg'
import flavormole from '../assets/flavormole.svg'
import flavorguayaba from '../assets/flavorguayaba.svg'



export const FormVenta = () => {
    // hook useGet
    let url = 'https://srpint2.herokuapp.com/bebidas'
    let {getData} = useGet(url);

    //hook usecontar
    const{cantidad,adicionar ,restar }= useContar(0); 



// const compra=[];//constanta para guardar checkbox 
// manipulo los inptuspara conocer valor
const handleChange = ({target})=>{
console.log(target.checked);

// if (target.checked === true){
//     let add= 
// {
//     precio: target.value ,
};

// compra.push(add);
//     console.log("Agregsaste al carro", target.name, compra);
// }else{
//     compra.splice(target.value);
//     console.log("Quitaste del carro un", target.name, compra);  
// }

// }
// funcion de envio de formulario
const handleSubmit = (e)=>{
    e.preventDefault();
   
}

    return (
//  modal con pror{children}
 
<StyleForm onSubmit={handleSubmit}>
  
  <StyleCantidad>
  <button className='boton menos'type='buttom' onClick={restar}>-</button>
 
   <h1>{cantidad}</h1>
  <button className='boton mas' type='buttom' onClick={adicionar}>+</button>

  </StyleCantidad>
             <div>
                        <h2>Sabor</h2>
                        <div>
                            <img src={flavorverde} alt="" />
                            <img src={flavorrajas} alt="" />
                            <img src={flavorpiña} alt="" />
                            <img src={flavormole} alt="" />
                            <img src={flavorpasas} alt="" />
                            <img src={flavorguayaba} alt="" />

                        </div>

            </div>
        
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

        <button className="botton" type="submit ">Agregar {cantidad} al Carro </button>
        </StyleForm>
        

    )


}
