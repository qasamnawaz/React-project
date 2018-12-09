import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { browserHistory } from 'react-router';
class Detail extends Component{
state={
  
     b: window.location.href.slice(36),
    c: JSON.parse(localStorage.getItem('key'))
}
 delete=()=> {
   this.state.c.splice(this.state.b,1);
   localStorage.setItem('key',JSON.stringify( this.state.c)); 
    alert("Account is deleted")
}
    render(){
 
return(
    <div className='trans'>     
     <Link to="/accounts" className='btnn'><i class="fas fa-arrow-left" style={{margin:'5px'}}></i>Back to accounts</Link>
     <div style={{marginTop:'25px'}}>
     <p className='p'>Account Detail</p>
     <p className='p1' onClick={()=>this.delete()}>
     <Link to="/accounts">Delete Account</Link></p>
     </div>
     <hr/>
        <div className='d'>
            <span>Account#</span>
            <span className='b'>{this.state.b}</span>
        </div>
        <hr/>
        <div className='d'>
            <span>Full Name</span>
            <span className='b'>{this.state.c[this.state.b].name}</span>
        </div>
        <hr/>
        <div className='d'>
            <span>Account Type</span>
            <span className='b'>{this.state.c[this.state.b].type}</span>
        </div>
        <hr/>
        <div className='d'>
            <span>Current Balance</span>
            <span className='b'>{this.state.c[this.state.b].intial}</span>
        </div>
        <hr/>
        <div className='d'>
            <span className='d1'><Link to={"/withdraw/"+(this.state.b)}>WITHDRAW</Link></span>
            <span className='d2'><Link to={"/deposit/"+(this.state.b)}>DEPOSIT</Link></span>
        </div>
    </div>

)
}
}


export default Detail;