import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    panda: 'https://goo.gl/oNbtoq',
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES);


class AnimaImage extends Component{
    state = { src: ANIMAL_IMAGES[this.props.animal] }

    componentWillReceiveProps( nextProps) {
        console.log('1. ComponentWillReceiveProps', nextProps);
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal]})
    }

    shouldComponentUpdate(nextProps) {
        /* Hay que devolver un booleano,
        Si este método no existe devuelve true por defecto */
        console.log('2. shouldComponentUpdate');
        console.log('Anterior', this.props.animal);
        console.log('Nuevos', nextProps.animal);
        return this.props.animal !== nextProps.animal;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('3. ComponentWillUpdate', nextProps, nextState);
        const img = document.querySelector('img');
        console.log('From img element', {alt: img.alt});
        // Web animations api
        img.animate([
            {
                filter: 'blur(0px)'
            },
            {
                filter: 'blur(2px)'
            }],{
                duration: 500,
                easing: 'ease'
            })
    }

    render() {
        console.log('--> render')
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img 
                    alt={ this.props.animal } 
                    src={ this.state.src }
                    width='250'
                />
                
            </div>
        )
    }
}

AnimaImage.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

export default class UpdateLifeCycleExample extends Component {
    state = { animal: 'panda' }
    _renderAnimalButton = (animal) =>  {
        return <button 
                    key={animal} 
                    onClick={() => this.setState({ animal })} 
                    //disabled={animal === this.state.animal}
                    >
                    {animal}
                </button>
    }
    render() {
        console.log('4. render');
        return(
            <div>
                <h4> Ciclo de Actualización, EJemplo de : ShouldComponentUpdate</h4>
                {ANIMALS.map( this._renderAnimalButton)}
                <AnimaImage animal={this.state.animal} />
            </div>
        )
    }
}
