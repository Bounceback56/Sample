/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "../assets/images/amazon.svg";
import Hamburger from "../assets/images/hamburger.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText } from "../utils/textSlice";

function Header(){
    const [ismenuopen,setismenuopen]=useState(true);
    const searchText=useSelector((store)=>store.text.searchText)
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        dispatch(setSearchText(e.target.value));
    }

    return (
      <div className="header-parent-container flex  p-4">
        <div className="logo-container flex">
          <a href="/" className="cursor-pointer">
            <img className="h-12 w-20" src={Logo} alt="logo" />
          </a>
          <img className="hamburger hidden" src={Hamburger} alt="Hamburger-icon" onClick={()=>{
            setismenuopen(!ismenuopen);
          }}/>
        </div>
        <div className="search-container">
          <input
            id="search"
            type="text"
            className="h-10 p-2"
            placeholder="Search..."
            value={searchText}
            onChange={handleChange}
          />
        </div>
        <div className={`menu-outer-container ${ismenuopen ? 'block' : 'hidden'} md:flex justify-center mr-4`}>
        <div className="menu-inner-container">
          <ul className="list flex justify-evenly">
            <li><Link to="/about" className=" hover:text-gray-300"><strong>About</strong></Link></li>
            <li><Link to="/contact" className=" hover:text-gray-300"><strong>Contact</strong></Link></li>
            <li><Link to="/cart" className=" hover:text-gray-300"><strong>Cart</strong></Link></li>
          </ul>
        </div>
        </div>
      </div>
    );
}
export default Header
