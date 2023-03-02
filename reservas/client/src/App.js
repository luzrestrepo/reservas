import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ActualizarReserva from './componentes/ActualizarReserva/ActualizarReserva';
import NuevaReserva from './componentes/NuevaReserva/NuevaReserva';
import TodasReservas from './componentes/TodasReservas/TodasReservas';


const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact render={()=><TodasReservas/>}/> 
        <Route path="/nuevo" exact render={()=><NuevaReserva/>}/>
        <Route path="/reservas/editar/:id" exact render={(pathParams) => <ActualizarReserva {...pathParams} />}/>
        


      </Switch>    
      
      </BrowserRouter>

    </div>
  )
}


export default App;
