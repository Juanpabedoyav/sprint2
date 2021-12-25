import React, {useEffect, useState} from 'react'
import { useContar } from '../hooks/useContar'
// import { useForm } from '../hooks/useForm'
import {StyleForm, StyleSabor} from '../styles/FormVenta.Style'
import {StyleCantidad} from '../styles/Boton.style'
import flavorArrozConLeche from '../assets/flavorArrozConLeche.svg'
import flavorcafe from '../assets/flavorcafe.svg'
import flavorchampurrado from '../assets/flavorchampurrado.svg'
import flavorchocolate from '../assets/flavorchocolate.svg'
import {StyleGlobal} from '../styles/Platos.style'
import { Link, useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



export const FormVenta1 = () => {
//   hooks personalizados
const{cantidad, adicionar ,restar }= useContar(0); 


// hooks
const [bebida, setBebida] = useState([])
const [guajalota, setGuajalota] = useState([])


// React Router-Dom

    const {id}= useParams();
   let filtro = bebida.filter(el=>el.sabor === id) 
//    let filtro2 = guajalota.filter(el=>el.sabor === id) 
// const costo =filtro.precio;
// let a= filtro.find(x=>x)
// let  {precio}=a



// console.log(precio)
const getData = async()=>{

    const resBebidas = await fetch('https://srpint2.herokuapp.com/bebidas');
    const datosBebidas = await resBebidas.json();
    const resGuajalota = await fetch('https://srpint2.herokuapp.com/guajolotes');
    const datosGuajalota = await resGuajalota.json();
    setBebida(datosBebidas);

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
    // imagen: filtro.imagen : filtro2.imagen
})
const handleChange=({target})=>{
    // let total= Number(datos.cantidades)  + Number(datos.adicion);
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
 
<Link className="volver"  to='/bebidas'>🡨</Link>

<Link to='/carrito'><FontAwesomeIcon  className="car" icon={faShoppingCart}/></Link>
 
<StyleGlobal/>
  <div>
      {
          //tamal filtrado con id de busqueda
          filtro.map((el) => {
              return(                   
               <div className="imgen-principal">
                        {/* <h1>{el.sabor}</h1> */}
                    <img className="img" src={el.imagen} alt={el.sabor} />
                    <p className="sabor-principal">{el.sabor}</p>
                    <p className="precio-principal">${el.precio} MXN</p>
                    </div>
            ) 
        })
     
            }


  </div>
  <StyleCantidad>
  <button className='boton menos'type='button' onClick={restar}>-</button>

 <h1>{datos.cantidades= cantidad}</h1>
   
  <button className='boton mas' type='button' onClick={adicionar}>+</button>

  </StyleCantidad>
             <StyleSabor>
                        <h2 className="titulo">Sabor</h2>
                        <div className= "flavors">
                             <img src={flavorArrozConLeche} alt="" />
                            <img  src={flavorcafe} alt="" />
                            <img  src={flavorchampurrado} alt="" />
                            <img  src={flavorchocolate} alt="" />
                           
                        </div>
            </StyleSabor>
        
            <div>
                <h3>Guajolocombo</h3>
                <p className="copy-combo">Selecciona la bebida que más te guste y disfruta de tu desayuno.</p>
            </div>
           {
            guajalota.map((elem)=>{
                return(
                    <>
                    <div className="combo">
                            <div key={elem.id} className="items">
                                <input  
                                    type="checkbox"
                                    name='adicion'
                                    value={elem.sabor +" + $" + elem.precio +"MXN"}
                                    onChange={handleChange} />
                                    
                                <img src={elem.imagen} alt={elem.sabor} />
                                <p className="nombre">{elem.sabor}</p>
                                <p className="precio">+ ${elem.precio} MXN</p>
                            </div>

                    </div></>

            
                )

            })   
}
        <button className="botton" type="submit" onClick={sendData}>Agregar {datos.cantidades} al Carro $ {Number(datos.cantidades*12)} </button>
</StyleForm>
    )
}
