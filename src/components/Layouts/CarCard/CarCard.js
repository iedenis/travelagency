import React, { useState } from 'react'
import { Typography, CardContent, CardMedia, CardActions, Card, CardHeader, Avatar, Collapse, Button, Popper, ClickAwayListener, Divider, Tooltip } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import CarFeatures from './CarFeatures';
import Policies from './Policies';
import suppliers from '../../../images/suppliers/suppliers'
const StyledCard = styled(Card)`
max-width: 800px;
margin-bottom: 5px;
/* border: 1px solid; */
`
const CarImage = styled(CardMedia)`
.MuiCardMedia-root{
    display:flex;
}
&.MuiCardMedia-media{
    width: 200px;
    height: 133px;
}
&.MuiCardMedia-img{
    object-fit: fill;
}
`
const SupplierImage = styled.img`
    width: 60px;
    height: 30px;
`
const StyledTitle = styled(CardHeader)`
    .MuiCardHeader-title{
        font-weight: bold;
        font-size: 20px;
    }
    `

const CarCard = ({
    handleBookButtonClicked,
    carClass,
    carModel,
    numberOfSeats,
    numberOfLargeBags,
    numberOfSmallBags,
    numberOfDoors,
    typeOfGearBox,
    image,
    supplier
}) => {

    const supplierImagePath = suppliers[supplier]
    const [anchorEl, setAnchorEl] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(Boolean(anchorEl));

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };


    const id = open ? 'simple-popper' : undefined;


    return (
        <StyledCard>
            <StyledTitle
                avatar={
                    <Avatar
                        aria-label="car-model"
                        onClick={handleClick}
                        aria-describedby={id}
                    >
                        <Tooltip title={'Class ' + carClass} arrow>
                            <div>{carClass.slice(0, 1)}</div>
                        </Tooltip>

                    </Avatar>
                }

                title={carModel}
                subheader="or similiar"
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
                <Tooltip title={supplier} arrow>
                    <SupplierImage src={supplierImagePath} alt={suppliers.supplier} />
                </Tooltip>
                <Typography variant="body2" color="textSecondary" component="p">
                    Description or promo

          </Typography>

            </CardContent>
            <CardActions disableSpacing>
                <div style={{ display: 'flex', alignItems: 'center' }}>

                    <Button color='primary' variant='text'
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                        details
                        </Button>

                </div>

                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                    <Button onClick={handleBookButtonClicked} style={{ width: '200px' }} variant='contained' color='secondary'>Book</Button>
                </div>

            </CardActions>
            <Collapse
                in={expanded}
                timeout="auto" unmountOnExit>
                <CardContent>
                    <Divider />
                    <Policies />
                </CardContent>
            </Collapse>
            <Divider />
        </StyledCard>

    )
}

export default CarCard
