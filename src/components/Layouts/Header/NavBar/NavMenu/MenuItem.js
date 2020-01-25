import React, { useState } from 'react'
import { Grow, Paper, ClickAwayListener, MenuList, Button, Popper, MenuItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEuroSign, faDollarSign, faRubleSign, faShekelSign } from '@fortawesome/free-solid-svg-icons'
import LanguageIcon from '@material-ui/icons/Language';
import russianFlag from '../../../../../images/assets/flags/russia.svg'
import usaFlag from '../../../../../images/assets/flags/usa.svg'
import israelFlag from '../../../../../images/assets/flags/israel.svg'

const Flag = (chosenLanguage) => {
    const flag = (chosenLanguage.item === 'Русский') ? russianFlag : (chosenLanguage.item === 'English' ? usaFlag : israelFlag)
    return <img src={flag} alt='flag'
        style={{ width: '20px' }}
    ></img>
}
const NavMenuItem = ({ navItemText, link, subMenu, type }) => {
    const [open, setOpen] = useState(false);
    const currencyIcons = [faDollarSign, faEuroSign, faRubleSign, faShekelSign]
    const [currency, setCurrency] = useState(<FontAwesomeIcon style={{ fontSize: '20px' }} icon={faEuroSign} />)
    const [language, setLanguage] = useState(<LanguageIcon />)
    // const [anchorEl, setAnchorEl] = useState(null);

    const anchorRef = React.useRef(null);

    // const handleClick = event => {
    //     console.log(event.currentTarget)
    //     setAnchorEl(event.currentTarget);
    // };
    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = (event, type, item) => {
        switch (type) {
            case 'currency': setCurrency(<FontAwesomeIcon style={{ fontSize: '20px' }} icon={currencyIcons[subMenu.indexOf(item)]}></FontAwesomeIcon>); break;
            case 'language': setLanguage(<Flag item={item} />); break;
            default: break;
        }

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
                {(type === 'currency' || type === 'language') ? (type === 'currency' ? currency : language) : (navItemText)}

                {/* {subMenu !== undefined ? <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faChevronDown} /> : null} */}

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
                                    {subMenu.map((item, idx) => <MenuItem key={idx} onClick={e => handleClose(e, type, item)}>{item}</MenuItem>)}
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
