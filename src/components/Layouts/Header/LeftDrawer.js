import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { SwipeableDrawer } from '@material-ui/core';
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        backgroundColor: 'yellow'
    }
});

const StyledDrawer = styled(SwipeableDrawer)`

.MuiPaper-root{
    background-color: ${props => props.color};
}
.Mui-Selected{
   
        /* background-color:${props=>props.buttonColor} */

}
  
`
export default function TemporaryDrawer({ toggleDrawer, isOpen, menuItems, onOpen }) {

    const classes = useStyles();

    const sideList = () => (
        <div
            className={classes.list}
            //role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List style={{ color: 'black' }} >
                {menuItems.map((menuItem, index) => (
                    <ListItem button key={menuItem.navItemText} component={Link} to={menuItem.link}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={menuItem.navItemText} />
                    </ListItem>
                ))}
               
            </List >
        </div >
    );

    return (
        <div>
            <StyledDrawer
                            // color={useTheme().palette.primary.main}
                color={'#fafafa '}
                open={isOpen}
                onClose={toggleDrawer(false)}
                anchor='left'
                onOpen={toggleDrawer(true)}
            >
                {sideList()}
            </StyledDrawer>
        </div>
    );
}
