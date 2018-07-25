import React, { Component} from 'react';

/* Refenrencias
No es lo más común ni la mejor práctica, ya que hace que nuestro código 
deje de ser declarativo.
    ref={inputElement => this.inputName = inputElement}

Componentes descontrolados:
Es a la forma que realizamos este desarrollo de un formulario, ya que no 
tenemos ningún control sobre ellos y tenemos que recurrir al arbol de
elementos par obtener su valor.

Componentes Controlados: 
Manejamos el estado interno de dichos inputs
*/

export default class Forms extends Component {
    constructor() {
        super()
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        /* const name = this.inputName.value;
        const twitter = document.getElementById('twitter').value;
        console.log(name, twitter);*/
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({inputTerms: e.target.checked})
    }
    render() {
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input
                            id='name'
                            name='username'
                            onChange={e => this.setState({ inputName: e.target.value})}
                            placeholder='Introduzca su nombre'
                            ref={inputElement => this.inputName = inputElement}
                            value={this.state.inputName}
                            />
                            
                    </p>
                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            onChange={e => this.setState({ inputTwitter: e.target.value})}
                            placeholder='Introduzca su twitter'
                            value={this.state.inputTwitter}
                            />
                    </p>
                    <p>
                        <label>
                            <input 
                                onChange={this.handleChange} 
                                type="checkbox"
                                checked={this.state.inputTerms} 
                                />
                            Aceptar condiciones
                        </label>
                    </p>
                    
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}
