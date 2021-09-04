import React, { Component, useState } from "react";
import { MenuItems } from './MenuItem';
import './NavBar.css';

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
         setClicked(!clicked)
    }

    return (
        <nav className="navbar-item">
            <h1 className="navbar-logo">Ghost Bookshelf</h1>
            <div className="navbar-menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas -times' : 'fas fa-bars'}></i>
            </div>

            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.className} href={item.url}>
                                {item.title}
                            </a>
                        </li>   
                    )
                })}
            </ul>

            {/******** User avatar ***********/}
            
        </nav>
    )
}

export default NavBar;