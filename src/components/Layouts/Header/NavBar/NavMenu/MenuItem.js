import React, { useState, useContext } from 'react'
import { Grow, Paper, ClickAwayListener, MenuList, Button, Popper, MenuItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEuroSign, faDollarSign, faRubleSign, faShekelSign } from '@fortawesome/free-solid-svg-icons'
import LanguageIcon from '@material-ui/icons/Language';
import russianFlag from '../../../../../images/assets/flags/russia.svg'
import usaFlag from '../../../../../images/assets/flags/usa.svg'
import israelFlag from '../../../../../images/assets/flags/israel.svg'
import { CurrencyContext } from '../../../../SharedState/SharedState';
import { useTranslation } from 'react-i18next'

// const Flag = (chosenLanguage) => {
//     const lg = chosenLanguage.item
//     const translateLanguage = lg === 'Русский' ? 'ru' : (lg === 'English' ? 'en' : 'he')
//     i18n.changeLanguage(translateLanguage)
//     const flag = (lg === 'Русский') ? russianFlag : (lg === 'English' ? usaFlag : israelFlag)
//     return <img src={flag} alt='flag'
//         style={{ width: '20px' }}
//     ></img>
// }

const NavMenuItem = ({ navItemText, link, subMenu, type }) => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const currencyIcons = [{ icon: faDollarSign, sign: '$', code: 'USD' }, { icon: faEuroSign, sign: '€', code: 'EUR' }, { icon: faRubleSign, sign: '₽', code: 'RUB' }, { icon: faShekelSign, sign: '₪', code: 'ILS' }]

    const [currency, setCurrency] = useContext(CurrencyContext)
    const [language, setLanguage] = useState(<LanguageIcon />)

    const anchorRef = React.useRef(null);
    
    const Flag = (chosenLanguage) => {
        const lg = chosenLanguage.item
        const translateLanguage = lg === 'Русский' ? 'ru' : (lg === 'English' ? 'en' : 'he')
        i18n.changeLanguage(translateLanguage)
        const flag = (lg === 'Русский') ? russianFlag : (lg === 'English' ? usaFlag : israelFlag)
        return <img src={flag} alt='flag'
            style={{ width: '20px' }}
        ></img>
    }

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = (event, type, item) => {
        const selectedCurrency = currencyIcons[subMenu.indexOf(item)];

        switch (type) {
            case 'currency': setCurrency({
                icon: <FontAwesomeIcon style={{ fontSize: '20px' }} icon={selectedCurrency.icon}></FontAwesomeIcon>,
                sign: selectedCurrency.sign,
                code: selectedCurrency.code
            }); break;
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
