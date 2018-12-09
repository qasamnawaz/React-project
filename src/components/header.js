import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    render(){
        return(
            <div className='head'>
               <p className='title'>Bank</p>
               <ul className='ul'>
                  
                  
                   <Link  to="/" className='li'>Dashboard</Link>
                   <Link to="/accounts" className='li'>Accounants</Link>
                   <Link  to="/transaction" className='li'>Transation</Link>
               </ul>
                </div>
        )
    }
}



export default Header