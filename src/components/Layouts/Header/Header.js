import React, { useState } from 'react'
import NavBar from './NavBar/NavBar'
import TopToolBar from './TopToolBar'
import LeftDrawer from './LeftDrawer'
import { Hidden } from '@material-ui/core'

const Header = () => {
    const menuItems = ['Home', 'About', 'Contacts', 'Blog']
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = open => event => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //     return;
        // }
        setIsDrawerOpen(open);
    };
    const handleOpen = () => {
        console.log('OPEN');
    }
    return (
        <div>
            <TopToolBar />
            <NavBar menuItems={menuItems} toggleDrawer={toggleDrawer} /> 
            <Hidden smUp>
                <LeftDrawer menuItems={menuItems} isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} onOpen={handleOpen} />
            </Hidden>
        </div>
    )
}

export default Header
