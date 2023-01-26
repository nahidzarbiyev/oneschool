import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineHeart} from 'react-icons/ai'
const Header = () => {
    const [toggle, setToggle] = useState(true)
    const handleBurger =()=>{
setToggle(!toggle)
    }
  return (
    <div className='header'>

<nav>
<div className="logo"><Link>OneSchool</Link></div>
<ul>
    <li>
        <NavLink to='/'>Home</NavLink>
    </li>
    <li>
        <NavLink>Courses</NavLink>
    </li>
    <li>
        <NavLink>Programs</NavLink>
    </li>
    <li>
        <NavLink to='/teachers'>Teachers</NavLink>

    </li>
    <li>
   <NavLink to={'/favorite'}> <AiOutlineHeart/> Wishlist</NavLink>
    </li>
</ul>

<button>Contact us</button>
<GiHamburgerMenu className='burger' onClick={()=>handleBurger()}/>
{
    toggle 
    ? 
    null
    :
    <div className="aside">
<ul>
    <li>
        <NavLink>Home</NavLink>
    </li>
    <li>
        <NavLink>Courses</NavLink>
    </li>
    <li>
        <NavLink>Programs</NavLink>
    </li>
    <li>
        <NavLink to='/add-teacher'>Teachers</NavLink>
    </li>
    <li>
    <AiOutlineHeart/> Wishlist
    </li>
    <li>
<button>Contact us</button>

    </li>
</ul>
</div>
}
</nav>

    </div>
  )
}

export default Header