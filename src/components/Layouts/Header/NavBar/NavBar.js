import React from 'react'
import { AppBar, Toolbar, IconButton, Hidden, Container } from '@material-ui/core'
import styled from 'styled-components'
import logo from '../../../../images/logo.png'
import NavMenu from './NavMenu/NavMenu'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const StyledAppBar = styled(AppBar)`
display:flex;

`
const Logo = styled.img`
position: relative;
width: 120px;
`

const SytledToolbar = styled(Toolbar)`
display:flex;
justify-content: space-between;
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
                    {/* <Hidden smUp><div style={{ flex: 1 }}></div></Hidden> */}
                    <Link to='/'>
                        <Logo src={logo}></Logo >
                    </Link>

                    {/* <Hidden xsDown> */}
                        <NavMenu menuItems={menuItems} />
                    {/* </Hidden> */}
                    {/* <Hidden smUp><div className="right" style={{ flex: 1 }}></div></Hidden> */}
                </SytledToolbar>
            </Container>
        </StyledAppBar >
    )
}

export default NavBar
