import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Hidden } from '@material-ui/core'
import styled from 'styled-components'
import logo from '../../../images/logo.png'
import NavMenu from './NavMenu'
import MenuIcon from '@material-ui/icons/Menu';

const StyledAppBar = styled(AppBar)`
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
max-width:1280px;
width:90%;
margin-left:auto;
 margin-right:auto; 
 /*border: 1px solid;*/
`


const NavBar = ({ toggleDrawer, menuItems }) => {
    return (
        <StyledAppBar position='relative' >
            { /* <Logo src={logo}></Logo > 
                < Spacer />
                <NavMenu></NavMenu>*/}

            <SytledToolbar>
                <Hidden smUp>
                    <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit">
                        <MenuIcon />
                    </IconButton>
                </Hidden>

                {/*<IconButton edge="start" color="inherit" aria-label="menu">*/}
                <Typography variant="h6" >
                    We4Travel
                </Typography>
                <Spacer />
                <Hidden xsDown>
                    <NavMenu menuItems={menuItems} />
                </Hidden>
            </SytledToolbar>
        </StyledAppBar >
    )
}

export default NavBar
