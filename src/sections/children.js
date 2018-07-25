import React, { Component} from 'react';
import PropTypes from 'prop-types';



class Box extends Component {
    render() {
        return (
            <div style={{ border: '1px solid #000', margin: 5, padding:5 }}>
                { this.props.children }
            </div>
        )
    }
}

class Article extends Component {
    /* Las propTypes nos ayudarán a documentar nuestros componentes y ver con un vistazo que necesitan.  */
    static   propTypes = {
        author: PropTypes.string.isRequired
    }

    render() {
        const { author, children, date, title } = this.props;
        return (
            <section>
                <h2>{title}</h2>
                { /* 
                Condicion boolean que si la primera evalua a true entonces
                renderiza lo segundo.
                */}
                { author && <p><em>Escrito por {author}</em></p>}
                <Box>{date}</Box>
                <article>
                    {children}
                </article>
            </section>
        )
        
    }
}

// Article.PropTypes = {
//     author: PropTypes.string
// }

export default class Children extends Component {
    /* Podemos pasarle cualquier tag html a nuestro children layout */
    render() {
        return (
            <div>
                <h4>Children props</h4>
                <Article
                    author='Joseantpr'
                    date={new Date().toLocaleDateString()}
                    title='Articulo de prop children'
                >
                    <p>El contenido que envolvemos dentro del componente Article será enviado como 
                    <strong> this.props.children</strong>
                    </p>
                </Article>
            </div>
        )
    }
}
