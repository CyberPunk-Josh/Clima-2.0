import React from 'react';
const Clima = ({resultado}) => {

    // extraer los valores:
    const {main, name} = resultado;

    if(!name) return null;

    // gardos Kelvin:
    const kelvin = 273.15;

    return ( 
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima de {name} es:</h2>
                <p className='temperatura'>
                    { parseFloat( main.temp - kelvin, 10 ).toFixed(2)}
                </p>
            </div>
        </div>
     );
}
 
export default Clima;