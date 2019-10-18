import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from '../Components/Dashboard/dashboard'
import Wizard2 from '../Components/Wizard/wizard-two'
import Wizard1 from '../Components/Wizard/wizard-one'
import Wizard3 from '../Components/Wizard/wizard-three'

export default(
    <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/Wizard2' component={Wizard2}/>
    <Route path='/Wizard1'component={Wizard1}/>
    <Route path='/Wizard3' component={Wizard3}/>
    </Switch>
)