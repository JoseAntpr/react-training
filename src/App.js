import React, { Component } from 'react';
import './App.css';
// import Constructor from './sections/life-cycle/constructor';
// import ComponentWillMount from './sections/life-cycle/componentWillMount';
// import ConditionalSection from './sections/conditional';
// import CarsList from './sections/lists';
// import PropsApp from './sections/props';
// import Contador from './sections/contador';
// import Events from './sections/events';
// import Forms from './sections/forms';
// import Children from './sections/children';
// import Render from './sections/life-cycle/render';
// import ComponentDidMount from './sections/life-cycle/componentDidMount';
// import FetchExample from './sections/fetch-example';
import UpdateLifeCycleExample from './sections/life-cycle/updateLifeCyleExample';
import ComponentWillUnMount from './sections/life-cycle/componentWillUnmount';



class App extends Component {
  render() {
    
    return (
      <div className="App">
        
       <ComponentWillUnMount />
        
      
        {/*

        <FetchExample />
        <Constructor />
        <ComponentWillMount />
        <Render />
        <ComponentDidMount />
        <Children />
         <Forms />
         <Events />
        <PropsApp />
        <ConditionalSection />
         
        <CarsList />
        <Contador contadorInicial={0}/> 
         <UpdateLifeCycleExample />
        */}
      </div>
    );
  }
}

export default App;
