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
    return (

        <Menu >
            <StyledLink to='/'>{menuItems[0]}</StyledLink>
            <StyledLink to='/about'>{menuItems[1]}</StyledLink>
            <StyledLink to='/contact'>{menuItems[2]}</StyledLink>
            <StyledLink to='/blog'>{menuItems[3]}</StyledLink>
        </Menu>
    )
}

export default NavMenu
