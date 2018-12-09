import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Withdraw extends Component{
    state={
        transactions:[],
        b: window.location.href.slice(31),
       c: JSON.parse(localStorage.getItem('key'))
   }
   handleSubmit=(e)=>{
    e.preventDefault();
    let amount = this.refs.draw.value ;
    let description = this.refs.des.value.trim();
    if(description === ''){
        description="description is not set";
    }
   
    if( isNaN( amount ) || amount <= 0 || amount ===''){
        alert( 'Please enter an amount to withdraw', 'error' );
        return;
    }

    if( amount > Number( this.state.c[this.state.b].intial)){
        alert( `There are only Rs. ${this.state.c[this.state.b].intial} available in this account.`, 'error' );
        return;
   }
   else{
       alert("Amount is withdraw");
       
   }
   
   this.refs.draw.value='';
   this.refs.des.value='';
   let obj ={
    id:this.state.b,
    type:'debit',
    name:this.state.c[this.state.b].name,
    amount:amount,
    description:description
}
let b= this.state.transactions.slice();
if( JSON.parse(localStorage.getItem('transaction')) ==null){ 
    b=[];
      }
      else {
     b=JSON.parse(localStorage.getItem('transaction'))  
    }
    b.push(obj);
    localStorage.setItem('transaction',JSON.stringify( b)); 
    this.setState({transactions:b});
   let obj1 ={
    name:this.state.c[this.state.b].name,
    type:this.state.c[this.state.b].type,
    intial:this.state.c[this.state.b].intial-amount,
}
  this.state.c[this.state.b]=obj1;
  localStorage.setItem('key',JSON.stringify( this.state.c));
 
}
    render(){
       
        return(
            <div className='trans1'>
        <p className='createhead'>Withdraw from account</p>
        <form action="" onSubmit={this.handleSubmit}>
     <div className='field'>Amount to Withdraw:
      <input type="text" className='inp1' ref='draw' placeholder={`Maximum: Rs. ${this.state.c[this.state.b].intial}`}  /><br/></div>
      <hr/>
     <div className='field'>Description (optional):
      <input type="text" className='inp1' ref='des' placeholder="Description of transaction"/><br/></div>
      <hr/>
      <button className='button' >WITHDRAW</button>
      <Link className='button' to={'/accountdetail/'+(this.state.b)}>CANCEL</Link>

      </form>
            </div>
        )
    }
}
export default Withdraw;