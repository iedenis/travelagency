import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Hidden, Container } from '@material-ui/core'
import styled from 'styled-components'
import logo from '../../../images/logo.png'
import NavMenu from './NavMenu'
import MenuIcon from '@material-ui/icons/Menu';

const StyledAppBar = styled(AppBar)`
display:flex;

`
const Logo = styled.img`
position: relative;
width: 120px;
`
const Spacer = styled.div`
flex:1;
`
const SytledToolbar = styled(Toolbar)`
    margin-left:auto;
    margin-right:auto; 
`


const NavBar = ({ toggleDrawer, menuItems }) => {
    return (
        <StyledAppBar position='relative' >
            <Container>

                <SytledToolbar>
                    <Hidden smUp>
                        <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                    {/*<IconButton edge="start" color="inherit" aria-label="menu">*/}
                    <Logo src={logo}></Logo >
                    {/* <Typography variant="h6" >
                    We4Travel
                </Typography> */}
                    <Spacer />
                    <Hidden xsDown>
                        <NavMenu menuItems={menuItems} />
                    </Hidden>
                </SytledToolbar>
            </Container>
        </StyledAppBar >
    )
}

export default NavBar
