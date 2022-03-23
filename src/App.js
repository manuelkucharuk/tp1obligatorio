import React from "react"
import FormRegistro from './FormRegistro'
import Saludo from './Saludo'
import 'bulma/css/bulma.min.css'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={formEnviado: false, datos: []}
    }

    handleFormEnviado(datos){
        this.setState({formEnviado: true})
        this.setState({datos: datos})
    }

    render(){
        return(
            <div className='columns is-centered'>
                <div className='column is-4'>
                    <FormRegistro onEnviado={this.handleFormEnviado.bind(this)} />
                </div>
                <div className='column is-4 is-size-3 has-text-weight-bold'>
                    <Saludo mostrar={this.state.formEnviado} datos={this.state.datos}/>
                </div>
            </div>
        )
    }
}

export default App;
