import React, { useState, useContext } from 'react'
import { Typography, CardContent, CardMedia, CardActions, Card, CardHeader, Avatar, Button, Divider, Tooltip, useMediaQuery, useTheme, Box, Grid } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import CarFeatures from './CarFeatures';
import Policies from './Policies';
import suppliers from '../../../images/suppliers/suppliers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CurrencyContext } from '../../SharedState/SharedState';
import { useTranslation } from 'react-i18next'
const StyledCard = styled(Card)`
max-width: 800px;
margin-bottom: 32px;
padding: 8px;
`
const CarImage = styled(CardMedia)`
.MuiCardMedia-root{
    display:flex;
}
&.MuiCardMedia-media{
    max-width: 200px;
    max-height: 133px;
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
const ListItem = styled.li`
    opacity: ${props => props.iszero === undefined || props.iszero > 0 ? 1 : 0.3}
    list-style: none;
    /* span{
        margin-left: 5px;
    } */
`
const PriceGridItem = styled(Grid)`
padding:8px;
display: flex;
justify-content: ${props => props.ismobile ? 'flex-start' : 'flex-end'};

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
    supplier,
    pricePerDay,
    id: carId
}) => {
    const supplierImagePath = suppliers[supplier]
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(Boolean(anchorEl));
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
    const { t } = useTranslation();


    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const currency = useContext(CurrencyContext)

    const id = open ? 'simple-popper' : undefined;

    const PriceSection = () => {

        return <PriceGridItem container wrap='nowrap'>
            <ul style={{ paddingLeft: '0px', margin: '0px' }}>
                {/* <Box fontSize='21px' style={{ fontWeight: 'bolder' }}>{pricePerDay} {currency[0]}
                        <span style={{ fontWeight: 'lighter', fontSize: '1rem' }}>per day</span>
                    </Box> */}
                <ListItem>
                    <Box fontWeight='normal' style={{ marginTop: '8px' }}>
                        <Tooltip title={t('carcard.tipfreecancelation')} arrow>

                            <Typography variant='body1'> <FontAwesomeIcon style={{ color: 'green', marginRight: '8px' }} icon={faCheck} />{t('carcard.freecancelation')}</Typography>
                        </Tooltip>
                    </Box>
                </ListItem>
                {/* <Typography variant='body1' style={{ marginTop: '8px' }}>Included in the price:</Typography> */}
                {/* <Divider style={{ marginBottom: '8px' }}  /> */}
                <ListItem ><FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} /> AmendmentsTheft </ListItem>
                <ListItem><FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} /> ProtectionCollision </ListItem>
                <ListItem><FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} /> {t('carcard.damagewaiver')} </ListItem>
            </ul>

        </PriceGridItem>

    }
    const Title = ({ carModel }) => {
        return <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>{carModel}</span>
            <Box fontSize='21px' style={{ fontWeight: 'bolder' }}>{pricePerDay} {currency[0]}
                <span style={{ fontWeight: 'initial', fontSize: '1rem', marginLeft: '8px' }}>{t('carcard.priceperday')}</span>
            </Box>
        </div>
    }
    return (
        <StyledCard>
            <StyledTitle
                avatar={
                    <Tooltip title={carClass + ` ${t('carclasses.class')}`} arrow>
                        <Avatar
                            aria-label="car-model"
                            onClick={handleClick}
                            aria-describedby={id}
                        >
                            <div>{carClass.slice(0, 1)}</div>

                        </Avatar>
                    </Tooltip>
                }

                title={<Title carModel={carModel} />}
                subheader={t('carcard.orsimiliar')}
            />
            <Grid container style={{
                display: 'flex',
                justifyContent: isMobile ? 'center' : '',
                // border: '1px solid',
            }}>
                <Grid item xs={6} lg={3}>

                    <CarImage
                        ismobile={isMobile.toString()}
                        component='img'
                        image={image}
                        title={carModel}
                    />
                </Grid>
                <Grid item xs={6} lg={3}>
                    <CarFeatures
                        transmissionType={typeOfGearBox}
                        numberOfSeats={numberOfSeats}
                        numberOfLargeBags={numberOfLargeBags}
                        numberOfSmallBags={numberOfSmallBags}
                        numberOfDoors={numberOfDoors}
                        pricePerDay={pricePerDay}
                    />
                </Grid>
                <Grid item xs={6} lg={3}
                // style={{ border: '1px solid' }}
                >
                    <Policies />
                </Grid>
                <Grid item xs={6} lg={3}>
                    <PriceSection />

                </Grid>

            </Grid>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title={supplier} arrow>
                    <SupplierImage src={supplierImagePath} alt={suppliers.supplier} />
                </Tooltip>

                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                    <Button
                        onClick={() => handleBookButtonClicked(carId)}
                        style={{ width: '200px' }}
                        variant='contained'
                        color='secondary'>{t('carcard.book')}
                    </Button>
                </div>
            </CardContent>

        </StyledCard>

    )
}

export default CarCard
