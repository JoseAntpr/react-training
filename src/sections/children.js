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

export default class Children extends Component {
    render() {
        return (
            <div>
                <h4>Children props</h4>
                <Box>Hola! Soy un children</Box>
                <Box>Otro box con otro contenido</Box>
            </div>
        )
    }
}
