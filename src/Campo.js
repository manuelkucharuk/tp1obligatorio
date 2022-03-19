import React,{Component} from "react"

class Campo extends Component{
     render(){
      let {id,type,label,placeholder} = this.props
      return (
        <div>
          <label htmlFor={id}>{label}</label>
          <input id={id} type={type} placeholder={placeholder}/>
        </div>
      )
    }
}


export default Campo;
