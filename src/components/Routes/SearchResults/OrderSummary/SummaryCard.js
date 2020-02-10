import React, { useContext } from 'react'
import { Card, CardContent, Typography, CardActions, Button, CardMedia, CardHeader, Grid, Divider } from '@material-ui/core'
import styled from 'styled-components'
import carModels from '../../../Layouts/CarCard/carModels/carModels'
import airplaneImage from '../images/plane.svg'
import SearchDetailsContext from '../../../../App'
const StyledCard = styled(Card)`
    margin-bottom: 16px;
`
const CarImage = styled(CardMedia)`
    &.MuiCardMedia-media{
    width: 300px;
}
`

const PlaneImage = styled.img`
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
                <Grid item sm style={{ border: '1px solid' }}>
                    <Grid container direction='column' >
                        <Grid container style={{ padding: '8px' }}>

                            <Grid item style={{ display: 'flex' }}>
                                <PlaneImage src={airplaneImage} alt='plane' />
                                <Typography variant='body1' style={{ marginLeft: '8px' }}> Pick-up on {searchDetails.pickUpDate.toLocaleDateString(undefined, options)} </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{ marginLeft: '28px' }}>at {searchDetails.pickUpLocation}</Typography>
                            </Grid>
                        </Grid>

                        <Divider />
                        <Grid container style={{padding: '8px'}}>

                            <Grid item style={{ display: 'flex' }}>
                                <PlaneImage src={airplaneImage} alt='plane' />
                                <Typography variant='body1' style={{ marginLeft: '8px' }}> Drop-off on {searchDetails.dropOffDate.toLocaleDateString(undefined, options)} </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{ marginLeft: '28px' }}>at {searchDetails.dropOffLocation}</Typography>
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
