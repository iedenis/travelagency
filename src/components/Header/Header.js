import React, { useState } from 'react'
import NavBar from './NavBar/NavBar'
import TopToolBar from './TopToolBar'
import LeftDrawer from './LeftDrawer'
const Header = () => {
    const menuItems = ['Home', 'About', 'Contacts', 'Blog']
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        <div>
            <TopToolBar />
            <NavBar menuItems={menuItems} toggleDrawer={toggleDrawer} />
            <LeftDrawer menuItems={menuItems} isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        </div>
    )
}

export default Header
