import React from 'react'
import {StyleGlobal} from '../styles/Platos.style'
import {StyleCopy} from '../styles/Copy.style'
import {AppRouter} from '../router/AppRouter'
import {Header} from '../components/Header'
import {Buscador} from '../components/Buscador'
// import {FormVenta} from '../components/FormVenta'
function App() {
  return (
    <div>
           <Header />
           {/* <FormVenta /> */}
  <StyleCopy>Nada como una Guajolota para empezar el día</StyleCopy>
          <Buscador/>
          <AppRouter /> 







      <StyleGlobal/>
    </div>
  );
}

export default App;
