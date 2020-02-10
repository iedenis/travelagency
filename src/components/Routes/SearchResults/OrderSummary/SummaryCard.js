import React, { useContext } from 'react'
import { Card, CardContent, Typography, CardActions, Button, CardMedia, CardHeader, Grid, Divider } from '@material-ui/core'
import styled from 'styled-components'
import carModels from '../../../Layouts/CarCard/carModels/carModels'
import airplaneImage from '../images/plane.svg'
import mapMarker from '../images/pin.svg'
import SearchDetailsContext from '../../../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled(Card)`
    margin-bottom: 16px;
`
const CarImage = styled(CardMedia)`
    &.MuiCardMedia-media{
    width: 300px;
}
`

const Icon = styled.img`
width: 20px;
height: 20px;
`

const SummaryCard = ({
    searchDetails,
    requestedCar
}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    console.log(new Date(searchDetails.dropOffDate));
    return (
        <StyledCard variant="outlined">

            < CardHeader
                title={requestedCar.carModel}
                subheader="or similiar"
            />
            <Grid container>

                <CarImage
                    component='img'
                    image={carModels.Chevrolet_spark}
                    title="Contemplative Reptile"
                />
                <Grid item><Divider orientation='vertical' /></Grid>
                <Grid item sm >
                    <Grid container direction='column' style={{  padding: '8px' }} >
                        {/**Pick up details */}
                        <Grid container direction='column'  style={{marginBottom:'8px'}} >
                            <Grid item style={{ display: 'flex' }}>
                                <Icon src={airplaneImage} alt='plane' />
                                <Typography variant='body1' style={{ marginLeft: '8px' }}> Pick-up on {searchDetails.pickUpDate.toLocaleDateString(undefined, options)} </Typography>
                            </Grid>
                            <Grid item style={{ display: 'flex' }}>
                                <Icon src={mapMarker} alt='location' />
                                <Typography variant='body1' style={{ marginLeft: '8px' }}>at {searchDetails.pickUpLocation}</Typography>
                            </Grid>
                        </Grid>

                        <Divider />

                        {/**Drop off details */}

                        <Grid container direction='column'style={{marginBottom:'8px'}}>

                            <Grid item style={{ display: 'flex' }} >
                                <Icon src={airplaneImage} alt='plane' />
                                <Typography variant='body1' style={{ marginLeft: '8px' }}> Drop-off on {searchDetails.dropOffDate.toLocaleDateString(undefined, options)} </Typography>
                            </Grid>
                            <Grid item style={{ display: 'flex' }}>
                                <Icon src={mapMarker} alt='location' />
                                <Typography variant='body1' style={{ marginLeft: '8px' }}>at {searchDetails.dropOffLocation}</Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container direction='column'>
                            <Grid item>
                            <Typography variant='body1'>Your rental includes:</Typography>
                            </Grid>
                            <Grid item>
                            <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> FREE Cancelation</div>
                            <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> FREE Amendmends</div>
                            <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> Free Unlimited Mileage</div>

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Word of the Day
          </Typography>
                <Typography variant="h5" component="h2">
                </Typography>
                <Typography color="textSecondary">
                    adjective
          </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
            <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </StyledCard>
    )
}

export default SummaryCard
