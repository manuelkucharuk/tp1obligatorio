import React from "react"
import FormRegistro from './FormRegistro'
import Saludo from './Saludo'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={formEnviado: false, datos: []}
    }

    handleFormEnviado(e,datos){
        this.setState({formEnviado: true})
        this.setState({datos: datos})
    }

    render(){
        return(
            <div>
                <FormRegistro onEnviado={this.handleFormEnviado.bind(this)} />
                <Saludo mostrar={this.state.formEnviado} datos={this.state.datos}/>
            </div>
        )
    }
}

export default App;
