import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
class Transaction extends Component {
    state = {
        c: JSON.parse(localStorage.getItem('transaction')),
    }
   

    render() {


        return (
            <div className='trans'>
                <Link to="/" className='btnn'><i class="fas fa-arrow-left" style={{margin:'5px'}}></i>Back to Dashboard</Link>
                <p style={{ textAlign: 'center', fontSize: '30px' }}><i class="fas fa-money-bill-alt" style={{marginRight:'5px'}}></i>Transactions</p>
                <hr />
                {
                    this.state.c == null
                        ? (
                            <div >
                                <h3 >No transactions have been made yet</h3>
                            </div>
                        )
                        : (
                              <div>
                            <table border={1} cellPadding="10">
                                <tbody>
                                    <tr>
                                        <td className='thead' >Account#</td>
                                        <td className='thead' >Name</td>
                                        <td className='thead' >Type</td>
                                        <td className='thead'>Amount</td>
                                        <td className='thead'>Description</td>
                                    </tr>

                                </tbody>

                                <tbody >
                                    {this.state.c.map( (value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td > {value.id}</td>
                                                <td > {value.name}</td>
                                                <td >{value.type}</td>
                                                <td >{value.amount}</td>
                                                <td >{value.description}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                           
                            </table>
                            
                        </div>
                       )

                }

            </div>

        )

    }

}


export default Transaction;