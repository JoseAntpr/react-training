import React, { Component } from 'react';
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
        console.log('ComponentWillReceiveProps', nextProps);
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal]})

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
                    disabled={animal === this.state.animal}>
                    {animal}
                </button>
    }
    render() {
        return(
            <div>
                <h4> Ciclo de Actualización, EJemplo de : COmponentWillReceiveProps</h4>
                {ANIMALS.map( this._renderAnimalButton)}
                <AnimaImage animal={this.state.animal} />
            </div>
        )
    }
}
