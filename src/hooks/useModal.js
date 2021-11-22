import{ useState} from 'react'

export const useModal = (initinalValue=false) => {
   const [abrir, setAbrir] = useState(initinalValue)
 
   const abrirModal = ()=> setAbrir(true);
   const cerrarModal = ()=> setAbrir(false);
return{
    abrir,
    abrirModal,
    cerrarModal,
}

}
