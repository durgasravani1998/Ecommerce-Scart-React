import React from 'react';
import {NavLink} from "react-router-dom";
import '../Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <NavLink to="/">Shop</NavLink>
            {/* <Link><i class="fa-solid fa-cart-shopping"></i></Link> */}
            <NavLink to="/cart" > <i class="fa-solid fa-cart-shopping"></i></NavLink>
        </div>




    </div>
  )
}

export default Navbar