import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, SwipeableDrawer } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});


export default function TemporaryDrawer({ toggleDrawer, isOpen, menuItems, onOpen }) {
    const StyledDrawer = styled(SwipeableDrawer)`
        .MuiDrawer-paper{
             background-color: ${useTheme().palette.primary.main};
}
`
    const handleOpen = () => {
        console.log("OPEN");
    }
    const classes = useStyles();

    const sideList = () => (
        <div
            className={classes.list}
            //role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List style={{ color: 'white' }} >
                {menuItems.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <SwipeableDrawer
                open={isOpen}
                onClose={toggleDrawer(false)}
                anchor='left'
                onOpen={toggleDrawer(true)}

            >
                {sideList()}
            </SwipeableDrawer>
        </div>
    );
}
