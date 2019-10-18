import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class wizard3 extends Component{
constructor(){
    super()
    this.state = {
        mortgage: '',
        rent: ''
    }
    
}
handleChange = e => {
    const {name,value} = e.target
    this.setState ({
      value: this.state.name
    })
}
render(){
    const {mortgage,rent} = this.state
    return(
        <div>
            <div>
                mortgage
                <input 
                    name = 'mortgage'
                    value = {this.state.mortgage}
                    onChange={e =>this.handleChange(e)}></input>
            </div>
            <div>
                rent
                <input 
                    name = 'rent'
                    value = {this.state.rent}
                    onChange={e =>this.handleChange(e)}></input>
            </div>
            <Link to='/'>
                <button>cancel</button>
                </Link>
                <button>complete

                </button>


        </div>
    )
}
} 

export default wizard3