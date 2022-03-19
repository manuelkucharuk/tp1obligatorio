import React,{Component} from "react"
import Campo from './Campo'

class FormRegistro extends Component{
  constructor(props){
    super(props)
    this.campos = [
      {
        id: 'nombre',
        label: 'Nombre',
        type: 'text',
        placeholder: 'Juan',
      },
      {
        id: 'apellido',
        label: 'Apellido',
        type: 'text',
        placeholder: 'Perez',
      },
      {
        id: 'email',
        label: 'E-mail',
        type: 'email',
        placeholder: 'juanperez@example.com',
      },
      {
        id: 'telefono',
        label: 'Teléfono',
        type: 'text',
        placeholder: '11-5577-5555',
      },
      {
        id: 'password',
        label: 'Contraseña',
        type: 'password',
      },
      {
        id: 'confirmPassword',
        label: 'Confirmar contraseña',
        type: 'password'
      },
    ]
    }

    manejarClick(e){
      e.preventDefault()

    }

    render(){
      return (
        <>
        <form name="registroUsuario">
          {this.campos.map(c=><Campo id={c.id} label={c.label} type={c.type} placeholder={c.placeholder}/>)}
          <button type="submit" onClick={this.manejarClick}>Enviar</button>
        </form>
        </>
      )
    }
}


export default FormRegistro;