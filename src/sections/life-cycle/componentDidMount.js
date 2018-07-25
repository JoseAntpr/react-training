import React, { Component } from 'react';
/* */
export default class ComponentDidMount extends Component{

    constructor(props) {
        console.log('Constructor');
        super(props);
        this.state = { mensajeInicial: 'Mensaje inicial', scroll: 0}
    }

    componentWillMount() {
        console.log('ComponentWillMount');
        this.setState({mensajeInicial: 'Cambio de mensaje'})
    }

    componentDidMount() {
        /* */
        console.log('ComponentDidMount');
        document.addEventListener('scroll', () => {
            console.log(window.scrollY);
            this.setState({ scroll: window.scrollY})
        })

    }

    render() {
        console.log('Render');
        return (
            <div>
                <h4>Ciclo de montaje: ComponentWillMount</h4>
                <p>El scroll es { this.state.scroll }</p>
                <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                 <p>Texto</p>
                { this.state.mensajeInicial }
                
            </div>
        )
    }


}