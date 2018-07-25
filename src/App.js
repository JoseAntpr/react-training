import React, { Component } from 'react';
import './App.css';
// import ConditionalSection from './sections/conditional';
// import CarsList from './sections/lists';
// import PropsApp from './sections/props';
// import Contador from './sections/contador';
// import Events from './sections/events';
// import Forms from './sections/forms';
import Children from './sections/children';



class App extends Component {
  render() {
    
    return (
      <div className="App">

        <Children />
      
        {/*
         <Forms />
         <Events />
        <PropsApp />
        <ConditionalSection />
         
        <CarsList />
        <Contador contadorInicial={0}/> 
        */}
      </div>
    );
  }
}

export default App;
