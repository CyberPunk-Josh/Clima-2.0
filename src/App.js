import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const {ciudad, pais} = busqueda;

  const[consultar, guardarConsultar] = useState(false);

  const [resultado, guardarResultado] = useState({});

  useEffect( () => {
    const consultarAPI = async () => {

      if(consultar){
        const apiId = 'eaeceed1f4968a8cd215b5c5c78775ee';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
      }
    }
    consultarAPI();
  }, [consultar]);

  return (
    <Fragment>
      <Header 
        titulo='Clima React App'
      />
      <div className='contenedor-form'>
        <div className="container">
        <div className="row">
          <div className='col m6 s12'>
            <Formulario 
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </div>
          <div className='col m6 s12'>
            <Clima 
              resultado={resultado}
            />
          </div> 
        </div>  
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
