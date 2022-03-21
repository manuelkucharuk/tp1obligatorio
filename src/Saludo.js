import React,{Component} from "react"

class Saludo extends Component{
    mostrarSaludo(datos){
        const nombre =    datos.find(d=>d.id==="nombre").valor
        const apellido =  datos.find(d=>d.id==="apellido").valor
        const email =     datos.find(d=>d.id==="email").valor
        const telefono =  datos.find(d=>d.id==="telefono").valor

        return(
          `Hola, ${nombre} ${apellido}, ya estás registrado/a.
           Te enviaremos un email a ${email} y un mensaje al ${telefono}
           con la información de tu cuenta.`
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
