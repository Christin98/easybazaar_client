import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"

import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { Context } from "../../utils/context"

import "./Header.scss";

const Header = () => {
    return (
    <header className="main-header">
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>Categories</li>
                <li>About</li>
            </ul>
        </div>
        <div className="center">EazyBazaar</div>
        <div className="left">
            <TbSearch/>
            <AiOutlineHeart/>
            <span className="cart-icon"> 
                <CgShoppingCart/>
            </span>
        </div>
    </header>
    );
};

export default Header;
