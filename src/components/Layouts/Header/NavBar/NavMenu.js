import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Menu = styled.ul`
/* max-width: 1280px; */
display:flex;

li{
    list-style: none;
}
`
const StyledLink = styled(Link)`
color:inherit;
margin: 0 10px;
text-decoration:none;
`
const NavMenu = ({ menuItems }) => {
    console.log(menuItems);
    return (

        // <Menu >
        //     <StyledLink to='/'>{'Home'}</StyledLink>
        //     <StyledLink to='/about'>{'About'}</StyledLink>
        //     <StyledLink to='/contact'>{'Contact'}</StyledLink>
        //     <StyledLink to='/blog'>{'Blog'}</StyledLink>
        // </Menu>
        <Menu>
            {menuItems.map((menuItem, idx) =>
                <StyledLink key={idx} to={menuItem.link} >{menuItem.navItemText}</StyledLink>
            )}
        </Menu>
    )
}

export default NavMenu
