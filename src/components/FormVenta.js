import React, {useEffect, useState} from 'react'
// import { useContar } from '../hooks/useContar'
// import { useForm } from '../hooks/useForm'
import {StyleForm, StyleSabor} from '../styles/FormVenta.Style'
import {StyleCantidad} from '../styles/Boton.style'
import flavorverde from '../assets/flavorverde.svg'
import flavorrajas from '../assets/flavorrajas.svg'
import flavorpiña from '../assets/flavorpiña.svg'
import flavorpasas from '../assets/flavorpasas.svg'
import flavormole from '../assets/flavormole.svg'
import flavorguayaba from '../assets/flavorguayaba.svg'
import {StyleGlobal} from '../styles/Platos.style'
import { Link, useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const FormVenta = () => {
//   hooks personalizados
const [cantidad, setCantidad] = useState(0)

const adicionar = ()=> setCantidad(cantidad + 1)
const restar = ()=> setCantidad(cantidad -1 )

// hooks
const [tamal, setTamal] = useState([])
const [bebida, setBebida] = useState([])
const [guajalota, setGuajalota] = useState([])


// React Router-Dom

    const {id}= useParams();
   let filtro = tamal.filter(el=>el.sabor == id) 
   let filtro2 = guajalota.filter(el=>el.sabor == id) 
//    const a=[];
//    if(filtro.imagen == undefined )  { 
//     a = filtro2
// }
// console.log(filtro   )


const getData = async()=>{
    const resTamal = await fetch('https://srpint2.herokuapp.com/tamales');
    const datosTamal = await resTamal.json();
    setTamal(datosTamal);
    const resBebidas = await fetch('https://srpint2.herokuapp.com/bebidas');
    const datosBebidas = await resBebidas.json();
    setBebida(datosBebidas);
    const resGuajalota = await fetch('https://srpint2.herokuapp.com/guajolotes');
const datosGuajalota = await resGuajalota.json();
    setGuajalota(datosGuajalota);
    
 } 
 useEffect(() => {
    getData();
 }, [])

 const [datos, setDatos] = useState({
    sabor :`${id}`,
    cantidades: '',
    total: '',
    adicion: '',
    imagen:``,
    imagen1:``,


})
const handleChange=({target})=>{
    setDatos({
        ...datos,
        [target.name]: target.value,
    })

    if (target.checked === false) {
        delete datos.adicion;
        //   total = total -  Number(datos.adicion);
    }
    console.log(datos);
}

const handleSubmit = (e)=>{
    e.preventDefault();
   alert("Revisa tu carrito");

}

const sendData = async()=>{
    await fetch( 'https://srpint2.herokuapp.com/carrito',{
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json; charset= utf-8'
        }
    })
}

    return (

<StyleForm onSubmit={handleSubmit}>
<Link className="volver"  to='/'>🡨</Link>

            <Link to='/carrito'><FontAwesomeIcon  className="car" icon={faShoppingCart}/></Link>
          
<StyleGlobal/>
  <div>
      {
          //tamal filtrado con id de busqueda
          filtro.map((el) => {
              return(                   
               <div className="imgen-principal">
                    <img className="img" src={el.imagen} alt={el.sabor} />
                    <p className="sabor-principal">{el.sabor}</p>
                    <p className="precio-principal">${el.precio} MXN</p>
                    <input 
                     style={{display:"none"}}
                    name='imagen'
                    value={el.imagen}
                    onInput={handleChange} />
                    </div>
            
            ) 
        })
     
            }
             {
                 //guajalota filtrada con id de busqueda
          filtro2.map((el) => {
              return(                   
               <div className="imgen-principal">
                        {/* <h1>{el.sabor}</h1> */}
                    <img className="img" src={el.imagen} alt={el.sabor} />
                    <p className="sabor-principal">{el.sabor}</p>
                    <p className="precio-principal">${el.precio} MXN</p>
                    <input  
                     style={{display:"none"}}
                     name="imagen1"
                     value={el.imagen}
                     onInput={handleChange} 
                     
                     />
                    </div>
                    
            ) 
        })
     
            }

  </div>
  <StyleCantidad>
  <button className='boton menos'type='button' onClick={restar}>-</button>
 
     <input className='input-cantidad' 
     type="text"
    name="cantidades"
    value={datos.cantidades}
    // onFocusCapture
    onChange={handleChange} /> 
    
 
 
   
  <button className='boton mas' type='button' onClick={()=>adicionar()}>+</button>

  </StyleCantidad>
             <StyleSabor>
                        <h2 className="titulo">Sabor</h2>
                        <div className= "flavors">
                            <img src={flavorverde} alt="" />
                            <img  src={flavorrajas} alt="" />
                            <img  src={flavorpiña} alt="" />
                            <img  src={flavormole} alt="" />
                            <img  src={flavorpasas} alt="" />
                            <img   src={flavorguayaba} alt="" />

                        </div>
            </StyleSabor>
        
            <div>
                <h3>Guajolocombo</h3>
                <p className="copy-combo">Selecciona la bebida que más te guste y disfruta de tu desayuno.</p>
            </div>
           {
            bebida.map((elem)=>{
                return(
                    <>
                    <div className="combo">
                            <div key={elem.id} className="items">
                                <input  
                                    type="checkbox"
                                    name='adicion'
                                    value={elem.sabor +" + $" + elem.precio +"MXN"}
                                    onChange={handleChange} />
                                    
                                <img src={elem.imagen} alt={elem.nombre} />
                                <p className="nombre">{elem.sabor}</p>
                                <p className="precio">+ ${elem.precio} MXN</p>
                            </div>

                    </div></>

            
                )

            })   
}
        <button className="botton" type="submit" onClick={sendData}>Agregar {datos.cantidades} al Carro $ {Number(datos.total) } </button>
</StyleForm>
    )
}
