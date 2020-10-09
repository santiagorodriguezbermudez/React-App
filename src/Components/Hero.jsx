import React from 'react';
import ReactRotatingText from 'react-rotating-text';

function Hero(props) {

    const arrayText = ["ceremonias", 'eventos', 'documentos', 'certificados', 'contratos', 'conferencias', 'notas', 'diplomas']

    return (
        <div id={props.id}>      
        <h1 className='titular'><strong>Traduce tus</strong></h1>
        <h1 className='titular'><em></em><ReactRotatingText items={arrayText}/></h1>
        <h3 className='sub-titular text-uppercase'>Construimos puentes de comunicación</h3>
        </div>
    )

    
}

export default Hero;