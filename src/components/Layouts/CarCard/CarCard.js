import React, { useState, useEffect } from 'react'
import { Grid, Typography, IconButton, CardContent, CardMedia, CardActions, Card, CardHeader, Avatar, Collapse, Button, Popper, ClickAwayListener } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import styled from 'styled-components';


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
const CarFeatures = styled.div`

`

const CarCard = ({ car, carClass }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [expanded, setExpanded] = useState(false);
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
                        {carClass}
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
                title="Suzuki Alto"
                subheader="In high demand: 16 booked in the last day"
            />
            <div style={{ display: 'flex' }}>

                <CarImage
                    component='img'
                    image={car}
                    title={car}
                />
                <CarFeatures>
                   features
                </CarFeatures>

            </div>

            <div style={{ display: 'flex' }}>
            </div>

            <div>Features</div>
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
                        // aria-expanded={expanded}
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
                //  in={expanded} 
                timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
            </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
            </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
                </CardContent>
            </Collapse>
        </StyledCard>

    )
}

export default CarCard
