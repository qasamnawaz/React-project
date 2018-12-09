import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content';
import Create from './components/create';
import Footer from './components/footer';
import Transaction from './components/transactions';
import Accounts from './components/accounts';
import Detail from './components/accountdetail';
import Withdraw from './components/withdraw';
import Deposit from './components/deposit';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { browserHistory } from 'react-router';
import './App.css';
class App extends Component {
  render() {
    

    return (
      <BrowserRouter >
      <div>
         
         <Header/>
         <Switch>
        <Route path="/transaction" component={Transaction}/>
        <Route path="/accounts" component={Accounts}/>
        <Route path={"/create"} component={Create}></Route>
        <Route path={"/withdraw/:id"} component={Withdraw}></Route>
        <Route path={"/deposit/:id"} component={Deposit}></Route>
        <Route path={"/accountdetail/:id"} component={Detail}></Route>
        <Route path={"/"} component={Content}></Route>
        </Switch>
        
        
        <Footer/>

      
      </div>
      </BrowserRouter>
    );

  }
}

export default App;