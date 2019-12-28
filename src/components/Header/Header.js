import React from 'react'
import NavBar from './NavBar/NavBar'
import TopToolBar from './TopToolBar'
import  LeftDrawer  from './LeftDrawer'
const Header = () => {
    return (
        <div>
            <TopToolBar />
            <NavBar />
            <LeftDrawer open={true} />
        </div>
    )
}

export default Header
