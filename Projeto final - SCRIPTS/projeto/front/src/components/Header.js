import React from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

export default function Header () {
        return (
            <Navbar color="dark" dark expand="sm">
                <NavbarBrand href="/">Gastos e Ganhos</NavbarBrand>
            </Navbar>
        )
    
        }