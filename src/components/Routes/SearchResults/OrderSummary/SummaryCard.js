import React, { useContext } from 'react'
import { Card, CardContent, Typography, CardActions, Button, CardMedia, CardHeader, Grid, Divider } from '@material-ui/core'
import styled from 'styled-components'
import carModels from '../../../Layouts/CarCard/carModels/carModels'
import airplaneImage from '../images/plane.svg'
import mapMarker from '../images/pin.svg'
import SearchDetailsContext from '../../../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react'
import suppliers from '../../../../images/suppliers/suppliers'

const StyledCard = styled(Card)`
    margin-bottom: 16px;
`
const CarImage = styled(CardMedia)`
    &.MuiCardMedia-media{
    width: 400px;
}
`

const Icon = styled.img`
width: 20px;
height: 20px;
`
const SupplierImage = styled.img`
    width: 60px;
    height: 30px;
`
const SummaryCard = ({
    searchDetails,
    requestedCar,
    extras
}) => {
    const supplierImagePath = suppliers[requestedCar.supplier]

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const stringMapping = (extra, number) => {
        switch (extra) {
            case 'driver': return `additional driver${number !== 1 ? 's' : ''}`;
            case 'booster': return `child booster${number !== 1 ? 's' : ''}`;
            case 'gps': return 'gps device';
            case 'child_seat': return `child seat${number !== 1 ? 's' : ''}`
            default: break;
        }
    }
    useEffect(() => {
        console.log(extras)
    }, [extras])

    const Extras = ({ arrayOfExtras }) => {
        return <>
            <Typography style={{ marginTop: '8px' }} variant='body1'>Your rental includes:</Typography>
            <Grid item>
                {arrayOfExtras.map(item => <div key={item[0]}><FontAwesomeIcon icon={faCheck} style={{ color: 'green', marginRight: '4px' }} />{item[1]}  {item[0]} </div>)}
                {arrayOfExtras.length > 0 ? <Divider style={{ margin: '8px 0' }} /> : ''}
                <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> FREE Cancelation</div>
                <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> FREE Amendmends</div>
                <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> FREE Unlimited Mileage</div>

            </Grid>

        </>
    }
    const displaySelectedExtras = () => {
        const selectedExtras = []
        if (extras !== undefined) {
            for (let [key, value] of Object.entries(extras)) {
                if (value.isChecked) {
                    const extra = stringMapping(key, value.count)
                    selectedExtras.push([extra, value.count]);
                }
            }
        }

        return selectedExtras
    }

    console.log(new Date(searchDetails.dropOffDate));
    return (
        <StyledCard variant="outlined">

            < CardHeader
                title={requestedCar.carModel}
                subheader="or similiar"
            />
            <Grid container>
                <Grid item>

                    <CarImage
                        component='img'
                        image={requestedCar.image}
                        title="requested car"
                    />
                </Grid>

                <Grid item><Divider orientation='vertical' /></Grid>
                <Grid item sm >
                    <Grid container direction='column' style={{ padding: '8px' }} >
                        {/**Pick up details */}
                        <Grid container direction='column' style={{ marginBottom: '8px' }} >
                            <Grid item style={{ display: 'flex' }}>
                                <Icon src={airplaneImage} alt='plane' />
                                <Typography variant='body1' style={{ marginLeft: '8px' }}> Pick-up on {searchDetails.pickUpDate.toLocaleDateString(undefined, options)} </Typography>
                            </Grid>
                            <Grid item style={{ display: 'flex' }}>
                                <Icon src={mapMarker} alt='location' />
                                <Typography variant='body1' style={{ marginLeft: '8px' }}> {searchDetails.pickUpLocation}</Typography>
                            </Grid>
                        </Grid>

                        <Divider style={{ margin: '8px 0' }} />

                        {/**Drop off details */}

                        <Grid container direction='column' style={{ marginBottom: '8px' }}>

                            <Grid item style={{ display: 'flex' }} >
                                <Icon src={airplaneImage} alt='plane' />
                                <Typography variant='body1' style={{ marginLeft: '8px' }}> Drop-off on {searchDetails.dropOffDate.toLocaleDateString(undefined, options)} </Typography>
                            </Grid>
                            <Grid item style={{ display: 'flex' }}>
                                <Icon src={mapMarker} alt='location' />
                                <Typography variant='body1' style={{ marginLeft: '8px' }}>{searchDetails.dropOffLocation}</Typography>
                            </Grid>
                        </Grid>
                        <Divider />


                        <Extras arrayOfExtras={displaySelectedExtras()} />



                        {/* <Grid container direction='column'>
                            <Grid item>
                                <Typography variant='body1'>Your rental includes:</Typography>
                            </Grid>
                            <Grid item>
                                <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> FREE Cancelation</div>
                                <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> FREE Amendmends</div>
                                <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> FREE Unlimited Mileage</div>

                            </Grid>
                        </Grid> */}


                    </Grid>
                </Grid>

            </Grid>

            <CardContent>
                <SupplierImage src={supplierImagePath} alt={requestedCar.supplier} />
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </StyledCard>
    )
}

export default SummaryCard
