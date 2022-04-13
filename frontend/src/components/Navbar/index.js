import React from "react";
import {Nav, NavLink, Bars, NavMenu} from "./NavbarElements";

const Navbar= () =>{
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/productList' activeStyle>
                        Product List
                    </NavLink>
                    <NavLink to='/addProduct' activeStyle>
                        Add Product
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;