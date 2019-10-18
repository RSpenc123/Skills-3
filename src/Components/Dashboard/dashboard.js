import React, {Component} from 'react'
import House from '../House/house'
import {Link} from 'react-router-dom'
class dashboard extends Component{
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }
    // componentDidMount = () => {
    //     this.props.getHouse();
    // }
    
    render(){
        return(
            <div>
                <div className = "Dashboard">
                   <div className = "d"> <p id="dash">Dashboard</p>
                    <Link to='/Wizard1'>
                        <button className="property">
                            <b>Add New Property</b>
                            </button></Link>
                            </div>
                            </div>
                 <House/>
                 <section> house 1
                     {/* {this.props.property}
                     {this.props.address}
                     {this.props.city}
                     {this.props.state}
                     {this.props.zip} */}

                 </section>
                
                
                
            </div>
        )
    }
}
export default dashboard