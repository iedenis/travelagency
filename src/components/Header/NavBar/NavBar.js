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
const SytledToolbar = styled(Toolbar)`
width:90%;
margin-left:auto;
 margin-right:auto; 
 /*border: 1px solid;*/
`
const NavBar = () => {
    return (
        <StyledAppBar >
            { /* <Logo src={logo}></Logo > 
                < Spacer />
                <NavMenu></NavMenu>*/}

            <SytledToolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" >
                    We4Travel
                </Typography>
                <Spacer />
                <NavMenu />
            </SytledToolbar>
        </StyledAppBar >
    )
}

export default NavBar
