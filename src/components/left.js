import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Left extends Component{

    
    render(){

return(
    <div className='left'>  
    <div style={{padding:'7px'}}><span>
    <i class="fas fa-user-alt" style={{marginRight:'10px'}}></i>
        Accounts</span>
    <Link  to="/accounts" className='btn'>View all</Link>
    <Link  to="/create" className='btn'><i class="fas fa-plus"></i> Create new account</Link>
    
    <hr/>
    </div>

    <div className='bottom'>
        <p>Accounts</p>
    </div>
    </div>

)
}
}


export default Left;