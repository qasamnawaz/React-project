import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Create extends Component{
    state ={
        objects:[]
    }
    createaccount=()=>{
       let name= this.refs.name.value;
       if(name===''){
        alert('Please Enter Name'); 
        return
       }
     this.refs.name.value='';

       let type= this.refs.type.value;
       if(type==='Select'){
        alert('Please Select Account Type'); 
        return   
    }
    this.refs.type.value='';

       let intial= this.refs.intial.value;
       if(intial===''){
        intial=0;
     }
     this.refs.intial.value='';

   let obj ={
        name:name,
        type:type,
        intial:intial,
    }   
    
    let b= this.state.objects.slice();
    if( JSON.parse(localStorage.getItem('key')) ==null){ 
        b=[];
          }
          else {
         b=JSON.parse(localStorage.getItem('key'))  
        }
        b.push(obj);
        localStorage.setItem('key',JSON.stringify( b)); 
        this.setState({objects:b});

        alert("Account is created.")
}
    addItem(e){
        e.preventDefault();
    }
    render(){
return(
   
    <div className='trans1'>     
    <p className='createhead'>Enter Accounts details below</p>
    <form action="" onSubmit={(e)=>{this.addItem(e)}}>
   
     <div className='field'> Full Name:<input type="text" className='inp' ref='name'/><br/> </div>  
      <hr />
      <div className='field'>Account Type:
      <select name="" id="" className='select' ref='type'>
      <option  value="Select"  >Select Account Type</option>
      <option value="Current">Current</option>
      <option value="Saving">Saving</option>
      </select></div> <br/> <hr/>  
      <div className='field'>Intial Desposit in Rs:
      <input type="number" className='inp1' ref='intial' defaultValue='1000'/><br/></div>
      <hr/>
      <button className='button' onClick={this.createaccount}>CREATE ACCOUNT</button>
      <Link  to="/accounts" className='button1' >VIEW ALL ACCOUNTS</Link>       
      </form>
    </div>
)
}
}


export default Create;