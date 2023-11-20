import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";


const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);


    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <>
            <header className='headerWrapper'>
            <div className='container'>
            <div className='headerInner'>
                {/* Logo */}
                <div className='headerLogo'>
                    <img src="../assets/img/logo.png" alt="Logo" />
                    {/* Menu Button with Dropdown */}
                </div>

                <div className={`navBar ${isDropdownOpen ? 'open' : ''}`}>

                    <ul className="menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                       <li><Link to={"/"} >Home</Link></li>
                       <li> <Link to={"/about"} >About Us <span><MdKeyboardArrowDown size={26} /></span></Link>
                       
                       </li>
                       <li><Link to={"/"} >Our Services</Link></li>
                       <li><Link to={"/"} >Cyber Securities</Link></li>
                       <li><Link to={"/"} >Industries We Serve</Link></li>
                       <li><Link to={"/"} >Career</Link></li>
                       <li><Link to={"/"} >Contact Us</Link></li>
                       
                    </ul>
                    </div>
                </div>
</div>
            </header>



        </>

    )
}

export default Header