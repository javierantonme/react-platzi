import React, { useState } from 'react'
import '@styles/header.scss'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg';
import Menu from '@components/Menu';

const Header = () => {

const iconoMenu = '@icons/icon_menu.svg';

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <nav>
                <img src={iconoMenu} alt="menu" className="menu" />

                <div className="navbar-left">
                    <img src={logo} alt="logo" className="nav-logo" />
                    <ul>
                        <li>
                            <a href="/">All</a>
                        </li>
                        <li>
                            <a href="/">Clothes</a>
                        </li>
                        <li>
                            <a href="/">Electronics</a>
                        </li>
                        <li>
                            <a href="/">Furnitures</a>
                        </li>
                        <li>
                            <a href="/">Toys</a>
                        </li>
                        <li>
                            <a href="/">Others</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <ul>
                        <li className="navbar-email" onClick={handleClick}>platzi@example.com</li>
                        <li className="navbar-shopping-cart" >
                            <img src={shoppingCart} alt="shopping cart" />
                            <div>2</div>
                        </li>

                    </ul>
                </div>

                {toggle ? <Menu /> : null}
            </nav >
        </div >
    )
}

export default Header