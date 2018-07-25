import React, { Component } from 'react';

/* 
    La utilidad principal es  preparar la configuración inicial del componente y 
    tener listo todos los datos. Ej: setState
*/

export default class ComponentWillMount extends Component{

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