import React, { useState, useContext } from 'react';
import MyOrder from '../containers/MyOrder';
import Menu from '@components/Menu';
import IconMenu from './IconMenu';
import AppContext from '../context/AppContext';

import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import '@styles/Header.scss';

const Header = () => {
	const { state:{cart} } = useContext(AppContext);
    const [ toggleDesktop, setToggleDesktop ] = useState(false);
    const [ toggleOrders, setToggleOrders ] = useState(false);
	const [ iconMenu, setIconMenu ] = useState(false);

	const handleClickDesktop = () => {
		setToggleDesktop(!toggleDesktop);
	}

	const handleClickIcon = () => {
		setIconMenu(!iconMenu);
	}

	const verifyCart = (cartNumber) => {
		if ((cartNumber) && (cartNumber > 9)) {
		  return "+9";
		} else {
			return cartNumber;
		}
	}

    return (
		<nav>
			<img src={menu} alt="menu" className="menu"
			onClick={handleClickIcon} 
			/>
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
					<li className="navbar-email" 
					onClick={handleClickDesktop}>
						hannaanaya@gmail.com
					</li>
					<li 
                    className="navbar-shopping-cart" 
                    onClick={() => setToggleOrders(!toggleOrders)}
                    >
						<img src={shoppingCart} alt="shopping cart" />
						{cart.length > 0 && <div>{verifyCart(cart.length)}</div>}
					</li>
				</ul>
			</div>
			{ toggleDesktop && <Menu /> }
			{ iconMenu && <IconMenu /> }
            { toggleOrders && 
			<MyOrder 
			        toggleOrders={toggleOrders}
					setToggleOrders={setToggleOrders}
			/>}
		</nav>
	);
}

export default Header;