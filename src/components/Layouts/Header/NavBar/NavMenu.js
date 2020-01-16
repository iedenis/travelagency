import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, List, ListItem, ListItemText, Typography, useTheme } from '@material-ui/core'
import Contact from '../../../Routes/Contact/Contact'

const Menu = styled.ul`
/* max-width: 1280px; */
display:flex;

li{
    list-style: none;
}
`
const NavigationMenu = styled(List)`
display:flex;
flex-direction: row;
`

const NavMenu = ({ menuItems }) => {
    const MenuTab = styled(ListItem)`
    &.MuiButtonBase-root{
        border-radius: 4px;
    }
    :hover{
        &.MuiButtonBase-root{
            background-color:${useTheme().palette.secondary.main};
        }
    }
    `
    return (

        <NavigationMenu component="nav">
            {
                menuItems.map((menuItem, idx) => {
                    return (
                        <MenuTab key={idx} button component={Link} to={menuItem.link}>
                            <ListItemText >
                                <Typography color="inherit" variant="subtitle1">
                                    {menuItem.navItemText}
                                </Typography>
                            </ListItemText>
                        </MenuTab >
                    )
                })
            }
        </NavigationMenu>

    )
}

export default NavMenu
