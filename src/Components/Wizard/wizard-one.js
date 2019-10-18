import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class wizard1 extends Component{
    constructor(){
        super()
        this.state = {
            property: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleChange = e => {
        const {name,value} = e.target
        this.setState ({
          value: this.state.name
        })
    }


render(){ 
const {property,address,city,state,zip }= this.state
return( 
        <div>
            <div>Property Name
                    <input
                    name = 'Property'
                    value = {this.state.property}
                    onChange={e =>this.handleChange(e)}></input>
                </div>
                <div>Address
                    <input
                    name = 'Address'
                    value = {this.state.address}
                    onChange={e =>this.handleChange(e)}
                    ></input>
                </div>
                <div>City
                    <input
                    name = 'City'
                    value = {this.state.city}
                    onChange={e =>this.handleChange(e)}></input>
                </div>
                <div>State 
                    <input
                    name = 'State'
                    value = {this.state.state}
                    onChange={e =>this.handleChange(e)}></input>
                </div>
                <div>Zip
                    <input
                    name = 'Zip'
                    value = {this.state.zip}
                    onChange={e =>this.handleChange(e)}></input>
                </div>

                <Link to = '/Wizard2'><button>Next</button></Link> 

        </div>
    )}}
export default wizard1


