    import React from "react";
    import {  NavLink } from "react-router-dom";
    import "./Styles/Header.css";
    import SearchIcon from "@material-ui/icons/Search";
    import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
    function Header() {
    return (
        // img for logo

        <nav className="header">
        <NavLink to="/">
            <img
            className="header__logo"
            src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png"
            alt="/"
            />
        </NavLink>

        {/* // search box input  */}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
            {/* // 3 link ==> User Sign , Return &Order ,  Your Prime  */}
        </div>
        <div className="header__navbar">
            {/* 1st link */}
            <NavLink to="/login" className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Hello LouisLe </span>
                <span className="header__optionLineTwo"> Sign In</span>
                </div>
            </NavLink>
            {/* 2nd link */}
            <NavLink to="/checkout" className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Return</span>
                <span className="header__optionLineTwo">& Order</span>
                </div>
            </NavLink>
            {/* 3rd link */}
            <NavLink to="/checkout" className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
                </div>
            </NavLink>
            {/* 4th link */}

            <NavLink to="/"  className="header__link">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__BasketCount">0</span>
            </div>
            </NavLink>

        </div>
        </nav>
    );
    }

    export default Header;
   
   
//    <NavLink to="/" activeClassName="selected"> 
//                 <div className="header__link">
//                     <div className="header__searchBasket">
//                     <ShoppingBasketIcon />
//                     <span className="header__BasketCount">0</span>
//                     </div>
//                 </div >
//             </NavLink>