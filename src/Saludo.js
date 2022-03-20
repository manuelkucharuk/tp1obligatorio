import React,{Component} from "react"

class Saludo extends Component{
  mostrarSaludo(datos){
    const nombre =    datos.filter(d=>d.id==="nombre")[0].valor
    const apellido =  datos.filter(d=>d.id==="apellido")[0].valor
    const email =     datos.filter(d=>d.id==="email")[0].valor
    const telefono =  datos.filter(d=>d.id==="telefono")[0].valor
      
    return(
      `Hola, ${nombre} ${apellido}, ya estás registrado/a.
      Te enviaremos un email a ${email} y un mensaje al ${telefono}
      con la información de tu cuenta.
      `
    )
  }

  render(){
    return (
      <div>
        {this.props.mostrar ? this.mostrarSaludo(this.props.datos): ""}
      </div>
    )
  }
}


export default Saludo;
