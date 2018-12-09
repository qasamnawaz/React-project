import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Detail from './accountdetail';
class Accounts extends Component {
    state = {
        c: JSON.parse(localStorage.getItem('key')),
    }
   

    render() {
        // console.log(this.clickMe)
        //    let modules= this.state.c.map(function(value,index){

        //         return(
        //          <tr key={index}>
        //         <td onClick={this.clickMe}>{value.name}</td>
        //          <td >{value.type}</td>
        //          <td >{value.intial} </td>
        //           </tr>      
        //      ) })   

        return (
            <div className='trans'>
                <Link to="/" className='btnn'> <i class="fas fa-arrow-left" style={{margin:'5px'}}></i>Back to Dashboard</Link>
                <Link  to="/create" className='btn'><i class="fas fa-plus" style={{margin:'5px'}}></i>Create new account</Link>
                <p style={{ textAlign: 'center', fontSize: '30px' }}><i class="fas fa-user-alt" style={{marginRight:'10px'}}></i>Accounts</p>
                <hr />
                {
                    this.state.c == null
                        ? (
                            <div >
                                <h3 >There are currently no accounts available.</h3>
                                <Link to={'/create'} className="button ">Create a new account</Link>
                            </div>
                        )
                        : (
                              <div>
                            <table border={1} cellPadding="10">
                                <tbody>
                                    <tr>
                                        <td className='thead' >Name</td>
                                        <td className='thead'>Type</td>
                                        <td className='thead'>Balance</td>
                                    </tr>

                                </tbody>

                                <tbody >
                                    {this.state.c.map( (value, index) => {
                                        return (
                                            <tr key={index}>
                                        <td ><Link to={'/accountdetail/'+(index)}>{value.name}</Link></td>
                                                <td >{value.type}</td>
                                                <td >{value.intial}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                           
                            </table>
                            
                        </div>
                       )

                }
                <BrowserRouter >
                
                <Route path="/accountdetail"  component={Detail}/>
                                
                </BrowserRouter>
             
            </div>

        )

    }

}


export default Accounts;