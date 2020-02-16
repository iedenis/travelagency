import React from 'react'
import './NavMenu.css'
import styled from 'styled-components'
import { List,Hidden } from '@material-ui/core'
import NavMenuItem from './MenuItem'
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom'
const NavigationMenu = styled(List)`
display:flex;
flex-direction: row;
`
const WithLink = ({ link, children }) => (link ? <Link style={{ color: 'inherit', fontSize: '20px', textDecoration: 'none' }} to={link}>{children}</Link> : children)


const NavMenu = ({ menuItems }) => {

    const menu =
        [
            { navItemText: <LanguageIcon />, link: null, subMenu: ['Русский', 'עברית', 'English'], type: 'language' },
            { navItemText: 'currency', link: null, subMenu: ['$ USD', '€ EUR', '₽ RUB', '₪ ILS'], type: 'currency' },
            { navItemText: 'Sign-in', link: '/sign-in', type: 'signin' },
            { navItemText: 'Blog', link: '/blog', type: 'blog' }
        ]

    return (
        <NavigationMenu component="nav">
            {/* {menu.map((item, idx) => {
                return <WithLink key={idx} link={item.link} >
                    <NavMenuItem  {...menu[idx]} /></WithLink>
            })} */}
            <WithLink link={menu[0].link}><NavMenuItem {...menu[0]} /> </WithLink>
            <WithLink link={menu[1].link}><NavMenuItem {...menu[1]} /> </WithLink>
            <Hidden xsDown><WithLink link={menu[2].link}><NavMenuItem {...menu[2]} /> </WithLink></Hidden>
            <Hidden xsDown>  <WithLink link={menu[3].link}><NavMenuItem {...menu[3]} /> </WithLink></Hidden>

        </NavigationMenu>



    )
}

export default NavMenu
