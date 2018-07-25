import React, { Component } from 'react';

/* Es el método obligatorio de nuestro componente,
    Este componente tiene que ser puro y solo debe encargarse de renderizar.

    Nada de realizar transformaciones o cambios de estado.
*/

export default class Render extends Component{

    constructor(props) {
        console.log('Constructor');
        super(props);
        this.state = { mensajeInicial: 'Mensaje inicial'}
    }

    componentWillMount() {
        console.log('ComponentWillMount');
        this.setState({mensajeInicial: 'Cambio de mensaje'})
    }

    render() {
        console.log('Render');
        return (
            <div>
                <h4>Ciclo de montaje: ComponentWillMount</h4>
                { this.state.mensajeInicial }
            </div>
        )
    }

}