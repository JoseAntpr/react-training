import React, { Component } from 'react';

/* 
    La utilidad principal es  preparar la configuración inicial del componente y 
    tener listo todos los datos. Ej: setState
*/

class ComponentToUnmount extends Component{
    state = { windowWidth: 0}

    _updateStateWithWindowWidth = () => {
        console.log('_updateStateWithWindowWidth');
        this.setState({ windowWidth: document.body.clientWidth});
    }
    componentDidMount () {
        this._updateStateWithWindowWidth();
        window.addEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount');
        window.removeEventListener(
            'resize',
            this._updateStateWithWindowWidth
        )
    }

    render() {
        return(
            <div>
                <p>Ancho de la ventana: {this.state.windowWidth}</p>
            </div>
        )
    }
}

export default class ComponentWillUnMount extends Component{
    state = { showComponent: true }

    render() {
        console.log('Render');
        if( this.state.showComponent ){
            return (
                <div>
                    <h4>Ciclo de desmontaje: ComponentWillUnMount</h4>
                    <ComponentToUnmount />
                    <button onClick={() => this.setState({showComponent: false})}>Desmontar</button>
                </div>
            )
        }
        return (
            <p>Componente desmontado</p>
        )
        
    }

}