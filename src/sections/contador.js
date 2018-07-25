import React, { Component } from "react";

class ContadorNumero extends Component {
    render() {
      console.log('ContadorNumero render()');
      return <span>{this.props.numero}</span>
    }
}

export default class Contador extends Component {
    constructor(props) {
      super(props);
      this.state = { contador: this.props.contadorInicial};
      setInterval(() => {
        this.setState({ contador: this.state.contador + 1})
      }, 1000)
    }
    render() {
      // return <span>{this.state.contador}</span>
      return <ContadorNumero numero={this.state.contador} />
    }
}
