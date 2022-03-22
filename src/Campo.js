import React,{Component} from "react"

class Campo extends Component{
     render(){
          const {id,type,label,placeholder} = this.props
          return (
              <div className='field'>
                  <label className='label' htmlFor={id}>{label}</label>
                  <div>
                      <input className='input' id={id} type={type} placeholder={placeholder}/>
                  </div>
              </div>
          )
     }
}

export default Campo;
