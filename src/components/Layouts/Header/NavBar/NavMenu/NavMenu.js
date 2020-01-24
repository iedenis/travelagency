import React from 'react'
import styled from 'styled-components'
import { List } from '@material-ui/core'
import NavMenuItem from './MenuItem'
import './NavMenu.css'
const NavigationMenu = styled(List)`
display:flex;
flex-direction: row;
`

const NavMenu = ({ menuItems }) => {

    const menu =
        [
            { navItemText: 'Language', link: '/', subMenu: ['Russian', 'English'] },
            { navItemText: 'Currency', link: '/', subMenu: ['Dollar', 'Euro'] },
            { navItemText: 'Sign-in', link: '/sign-in' },
            { navItemText: 'Blog', link: '/blog' }
        ]

    return (
        <NavigationMenu component="nav">
            {menu.map((item, idx) => {
                return <NavMenuItem key={idx} {...menu[idx]} />
            })}
        </NavigationMenu>



    )
}

export default NavMenu
