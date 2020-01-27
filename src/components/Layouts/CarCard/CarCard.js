import React, { useState, useEffect } from 'react'
import { Grid, Typography, IconButton, CardContent, CardMedia, CardActions, Card, CardHeader, Avatar, Collapse, Button, Popper, ClickAwayListener, Divider } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import styled from 'styled-components';
import CarFeatures from './CarFeatures';
import Policies from './Policies';

const StyledCard = styled(Card)`
max-width: 800px;
border: 1px solid;
`
const CarImage = styled(CardMedia)`
/* width: 50px;
height: 50px; */
.MuiCardMedia-root{
    display:flex;
}
&.MuiCardMedia-media{
    width: 300px;
    height: 200px;
}
&.MuiCardMedia-img{
    object-fit: fill;
}
`


const CarCard = ({
    carClass,
    carModel,
    numberOfSeats,
    numberOfLargeBags,
    numberOfSmallBags,
    numberOfDoors,
    typeOfGearBox,
    image }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [expanded, setExpanded] = useState(true);
    const [open, setOpen] = useState(Boolean(anchorEl));

    useEffect(() => {
        console.log(open);
    }, [open])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClickAway = () => {
        setOpen(false)
    };
    const id = open ? 'simple-popper' : undefined;


    return (
        <StyledCard>
            <CardHeader
                avatar={
                    <Avatar
                        aria-label="car-model"
                        onClick={handleClick}
                        aria-describedby={id}
                    >
                        {carClass.slice(0, 1)}
                        <ClickAwayListener onClickAway={handleClickAway}>

                            <Popper
                                id={id}
                                open={open}
                                anchorEl={anchorEl}>
                                <div>Class mini is a mini class</div>
                            </Popper>
                        </ClickAwayListener>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={carModel}
                subheader="In high demand: 16 booked in the last day"
            />
            <div style={{ display: 'flex' }}>

                <CarImage
                    component='img'
                    image={image}
                    title={carModel}
                />
                <CarFeatures
                    transmissionType={typeOfGearBox}
                    numberOfSeats={numberOfSeats}
                    numberOfLargeBags={numberOfLargeBags}
                    numberOfSmallBags={numberOfSmallBags}
                    numberOfDoors={numberOfDoors}
                />
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <div style={{ display: 'flex' }}>

                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        // className={clsx(classes.expand, {
                        //   [classes.expandOpen]: expanded,
                        // })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </div>

                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                    <Button style={{ width: '200px' }} variant='contained' color='secondary'>Book</Button>
                </div>
                
            </CardActions>
            <Collapse
                in={expanded}
                timeout="auto" unmountOnExit>
                <CardContent>
                    <Divider />
                    <Typography paragraph>  </Typography>
                        <Policies />
                </CardContent>
            </Collapse>
        </StyledCard>

    )
}

export default CarCard
