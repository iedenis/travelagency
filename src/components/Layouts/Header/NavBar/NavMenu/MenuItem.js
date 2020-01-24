import React, { useState } from 'react'
import { Grow, Paper, ClickAwayListener, MenuList, Button, Popper, MenuItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const NavMenuItem = ({ navItemText, link, subMenu }) => {
    const [open, setOpen] = useState(false);
    // const [anchorEl, setAnchorEl] = useState(null);

    const anchorRef = React.useRef(null);

    // const handleClick = event => {
    //     console.log(event.currentTarget)
    //     setAnchorEl(event.currentTarget);
    // };
    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };
    const handleClose = event => {
        // console.log(anchorRef.current)
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    
    return (
        <React.Fragment>
            <Button
                color='inherit'
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                {navItemText}
                {subMenu !== undefined ? <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faChevronDown} /> : null}

            </Button>
            {subMenu !== undefined ? <Popper

                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                placement='bottom-end'
            >
                {({ TransitionProps, placement }) => (

                    < Grow

                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {subMenu.map((item, idx) => <MenuItem key={idx} onClick={handleClose}>{item}</MenuItem>)}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper> : null
            }
        </React.Fragment >
    )
}

export default NavMenuItem
