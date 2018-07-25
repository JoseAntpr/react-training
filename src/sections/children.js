import React, { Component} from 'react';

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
    render() {
        return (
            <section>
                <h2>{this.props.title}</h2>
                <p><em>Escrito por {this.props.author}</em></p>
                <Box>{this.props.date}</Box>
                <article>
                    {this.props.children}
                </article>
            </section>
        )
        
    }
}

export default class Children extends Component {
    render() {
        return (
            <div>
                <h4>Children props</h4>
                <Article
                    author="Joseantpr"
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
