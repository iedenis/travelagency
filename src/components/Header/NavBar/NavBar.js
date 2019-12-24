import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import styled from 'styled-components'
import logo from '../../../images/logo.png'
import NavMenu from './NavMenu'

const StyledAppBar = styled(AppBar)`
margin-top: 20px;
display:flex;

`
const Logo = styled.img`
position: relative;
width: 90px;
`
const Spacer = styled.div`
flex:1;
`
const NavBar = () => {
    return (
        <StyledAppBar >
            { /* <Logo src={logo}></Logo > 
                < Spacer />
                <NavMenu></NavMenu>*/}

            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" >
                    We4Travel
                </Typography>
                <Spacer></Spacer>
                <NavMenu />
            </Toolbar>
        </StyledAppBar>
    )
}

export default NavBar
