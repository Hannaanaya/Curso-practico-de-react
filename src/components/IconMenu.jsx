import React from 'react'
import arrow from '@icons/flechita.svg';
import '@styles/IconMenu.scss';

const IconMenu = ({ toggleOrders, setToggleOrders  }) => {
    return (
        <nav>
            <div className="icon-menu">
				<ul>
				<div 
				    className="title-menu"
				    onClick={() => setToggleOrders(!toggleOrders)}
				>
				<img src={arrow} alt="arrow" />
                    <p>CATEGORIES</p>
                </div> 

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

				<ul>
                <li>
                    <a href="/account" class="email">hannaanaya@gmail.com</a>
                </li>
                <li>
                    <a href="/signup" class="sign-out">Sign out</a>
                </li>
            </ul>
			</div>
        </nav>
    );
}

export default IconMenu;