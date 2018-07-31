import React from 'react';
import {Link} from 'react-router-dom';

///COMPONENTS
import  './Footer.css';
import logo from './images/x.png';
/*import {CURRENT_YEAR} from '../../config';*/



const Footer = () =>{
    return(
        <div className='footer'>
            <Link to="/" className='logo'>
                <img alt='footer-img' src={logo}/>
                
            </Link>
            <div className='right'>
            ©Кафедра алгебри та математичної логіки<br/>
            Київський Національний університет імені Тараса Шевченка, 2006-2018
            </div>
        </div>
    )
}




export default Footer;