import React from "react";
import {HiOutlineBars3CenterLeft} from 'react-icons/hi2';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="bar-icon">
        <HiOutlineBars3CenterLeft/>
        <a href="#">All Departments</a>
      </div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">Man</a>
        <a href="#">Woman</a>
        <a href="#">Accessories</a>
        <a href="#">Blog</a>
        <a href="#">Page</a>
        <a href="#">Elements</a>
      </div>
      <div className="viewed">
        <a href="#">Recent Viewed</a>
      </div>
    </div>
  );
};

export default Navbar;
