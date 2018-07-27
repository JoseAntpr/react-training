import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

// class Article extends Component{
//     render() {
//         return(
//             <section>
//                 <h2>{this.props.title}</h2>
//                 <p><em>Escrito por: {this.props.author} </em></p>
//                 <p>{this.props.date}</p>
//                 <article>
//                     {this.props.children}
//                 </article>
//             </section>
//         )
//     }
// }

function Article (props){
    return (
        <section>
            <h2>{props.title}</h2>
            <p><em>Escrito por: {props.author} </em></p>
            <p>{props.date}</p>
            <article>
                {props.children}
            </article>
        </section>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
}

// class Button extends Component{
//     render() {
//         return(
//             <button style={{ borderColor: this.props.borderColor, display: 'block'}}>
//                 {this.props.label}
//             </button>
//         )
//     }
// }

const Button = ({borderColor = 'red', label}) => (
    <button style={{ borderColor, display: 'block'}}>
        {label}
     </button>
)


Button.propTypes = {
    borderColor: PropTypes.string,
    label: PropTypes.string.isRequired
}
 

export default class StatelessComponent extends Component{

    render() {
        return (
            <div>
                <h4>StatelessComponent</h4>
                <Article 
                    author={'Jose'}
                    date={new Date().toLocaleDateString()}
                    title= 'Articulo sobre Stateless'
                >
                <p>El articulo es muy largo solo voy a escribir unas cuantas lineas.
                </p>
                </Article>
                <Button label="Comentar artículo"></Button>
            </div>
        )
    }

}