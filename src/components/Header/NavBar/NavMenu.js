import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Menu = styled.ul`
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
const NavMenu = () => {
    return (

        <Menu >
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/about'>About</StyledLink>
            <StyledLink to='/contacts'>Contacts</StyledLink>
            <StyledLink to='/blog'>Blog</StyledLink>
        </Menu>
    )
}

export default NavMenu
