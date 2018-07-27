import React, { Component } from 'react';

class ThrowExceptionButton extends Component{
    state = { throwError: false};

    render() {
        if( this.state.throwError){
            throw new Error('Error lanzado por botón');
        }

        return (
            <button onClick={ () => this.setState({ throwError: true})}>
                Lanza error!
            </button>
        )
    }
}

export default class ComponentDidCatch extends Component{

    state = { hasError: false, errorMsg: ''};

    componentDidCatch(error, errorInfo) {
        console.log('ComponentDidCathc');
        console.log({error, errorInfo})
        this.setState({ hasError: true, errorMsg: error.toString()})
    }

    render() {
        console.log('Render');
        if( this.state.hasError){
            return (
                <div>
                    <p>Error en el componente: {this.state.errorMsg}</p>
                    <button onClick={() => this.setState({ hasError: false })}>
                        Volver a la aplicación
                    </button>
                </div>
                
            )
        }
        return (
            <div>
                <h4>Ciclo de montaje: ComponentDidCatch</h4>
            <ThrowExceptionButton />
                
            </div>
        )
    }

}