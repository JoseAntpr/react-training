import React, { Component } from 'react';

export default class Constructor extends Component{

    constructor(props) {
        console.log('Constructor');
        /* Este método llama al constructor de Component*/
        super(props);
        /* inicializando el state de nuestro componente  */
        this.state = { mensajeInicial: 'Mensaje inicial'}

        // Bindeado de funciones cuando sea necesaria 
        // this.funcion.bind(this)
    }

    render() {
        console.log('render');
        return (
            <div>
                <h4>Ciclo de montaje: Constructor</h4>
                { this.state.mensajeInicial }
            </div>
        )
    }

}

