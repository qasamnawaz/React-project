import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Right extends Component{
    state ={
        i:0,
        // a:JSON.parse(localStorage.getItem('transaction')).length
    }

    render(){
  
return(
    <div className='right'>    
   <div style={{padding:'7px'}}><span ><i class="fas fa-money-bill-alt" style={{marginRight:'5px'}}></i>Transactions</span>  
    <Link  to="/transaction" className='btn'>View all</Link>
    <hr/>
    </div>

    <div className='bottom'>
        
        <p onClick={()=>{this.num()}}>Transactions</p>
    </div>
    </div>

)
}
}


export default Right;