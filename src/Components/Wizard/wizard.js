 import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class wizard extends Component{
    
    
    render(){
        return(
            <div>
                <p>Add New Listing</p>
                
                <Link to='/'>
                <button>cancel</button>
                </Link>
                <button>complete

                </button>
            </div>
            
        )
    }
}
export default wizard