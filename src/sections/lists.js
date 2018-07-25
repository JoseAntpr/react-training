import React, { Component } from "react";
import cars from "../data/cars.json";

class CarItem extends Component {
    render () {
        const { car, id } = this.props;
        return  (
            <li key={id}>
                <p>
                <strong>Id:</strong>
                {id}
              </p>
              <p>
                <strong>Nombre:</strong>
                {car.name}
              </p>
              <p>
                <strong>Marca:</strong>
                {car.company}
              </p>
            </li>
        )
    }
}

export default class CarsList extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 6]
    return (
        <div>
            <h4>Cars list</h4>
            <ul>
                {cars.map(car => {
                return (
                    <CarItem id={car.id} key={car.id} car={car}/>
                );
                })}
            </ul>
            <h4>Trabajando con Listas</h4>
            { numbers.map((number, index) => {
            return <p key={index}>Soy el número {number}</p>
            })}


        </div>
      
    );
  }
}
