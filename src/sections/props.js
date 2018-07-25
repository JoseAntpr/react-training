import React, { Component } from "react";

class Hello extends Component{
    render() {
      return <h2>{ this.props.title }</h2>
    }
  }

class Text extends Component{
    render() {
      const { 
          text, 
          number, 
          isActivated, 
          arrayOfNumbers, 
          multiply, 
          objectWithInfo
      } = this.props;
  
      const textoByBoolean = isActivated ? 'On!': 'Off';
      const mappedNumbers = arrayOfNumbers.map(multiply);
      return (
        <div>
          <p>{ text }</p>
          <p>{ number }</p>
          <p>{ textoByBoolean }</p>
          <p>{ mappedNumbers.join(', ') }</p>
          <p>{ objectWithInfo.key }</p>
        </div>
  
      )
    }
  }

  Text.defaultProps = {
    text: 'Titulo por defecto'
  }
export default class PropsApp extends Component{
    render() {
       return ( 
            <div>
                <Hello title='Bienvenido a React'/>
                <Text 
                    arrayOfNumbers = {[2, 3, 10]}
                    objectWithInfo={{key:'value', key2: 'othervalue'}}
                    isActivated
                    multiply={ (number) => number*4}
                    number={2} 
                />
            </div>
       ) 
    }
}