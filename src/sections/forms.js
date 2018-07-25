import React, { Component} from 'react';

/* Refenrencias
No es lo más común ni la mejor práctica, ya que hace que nuestro código 
deje de ser declarativo.
ref={inputElement => this.inputName = inputElement}
*/

export default class Forms extends Component {
    handleClick = (e) => {
        e.preventDefault();
        const name = this.inputName.value;
        const twitter = document.getElementById('twitter').value;
        console.log(name, twitter);
    }
    render() {
        return (
            <div>
                <h4>Formularios</h4>
                <form>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input
                            id='name'
                            name='username'
                            placeholder='Introduzca su nombre'
                            ref={inputElement => this.inputName = inputElement}
                            />
                            
                    </p>
                    <p>
                    <label htmlFor='twitter'>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            placeholder='Introduzca su twitter'
                            />
                    </p>
                    <button onClick={this.handleClick}>Enviar</button>
                </form>
            </div>
        )
    }
}
