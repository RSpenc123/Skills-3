import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class wizard2 extends Component{
constructor(){
    super()
    this.state = {
        image: ''
    }
    
}
handleChange = e => {
    const {name,value} = e.target
    this.setState ({
      value: this.state.name
    })
}
render(){
    const {image} = this.state
    return(
        <div>
            <div>
                image url
                <input 
                    name = 'image'
                    value = {this.state.image}
                    onChange={e =>this.handleChange(e)}></input>
            </div>

            <Link to = '/Wizard3'><button>Next</button></Link> 

        </div>
    )
}
}export default wizard2