import React,{ Component} from 'react';

class ComponenteA extends Component{
    render() {
        return <p>ComponenteA</p>
    }
}

class ComponenteB extends Component{
    render() {
        return <p>ComponenteB</p>
    }
}
function useConditionalRendering (mostrarA) {


    if (mostrarA) {
        return <ComponenteA />
    }
    return <ComponenteB />
}

export default class ConditionalSection extends Component{
    constructor() {
        super();
        this.state = { mostrarA: true}
    }
    
    render() {
        // const conditionalComponent = this.state.mostrarA ? <ComponenteA /> : <ComponenteB />
        // const conditionalComponente = useConditionalRendering(this.state.mostrarA);
        return (
            <div>
                <h4>Conditional Rendering</h4>
                { /* conditionalComponent */ }
                { this.state.mostrarA ? <ComponenteA /> : <ComponenteB /> }
            </div>
        )
    }
}