
import {StyleGlobal} from '../styles/Platos.style'
import {AppRouter} from '../router/AppRouter'
import {Header} from '../components/Header'
import {Buscador} from '../components/Buscador'
function App() {
  return (
    <div>
          <Header />
          <Buscador/>
         <AppRouter />







      <StyleGlobal/>
    </div>
  );
}

export default App;
