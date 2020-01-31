import React, { useState } from 'react'
import { Grid, Checkbox, FormControlLabel, Button, useTheme, TextField } from '@material-ui/core'
import styled from 'styled-components'
import CarDatePicker from './CarDatePicker'
import AirportSelect from './AirportSelect'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const today = new Date();
const SearchButton = styled(Button)`
width: 100%;
height: ${props => props.ispc ? '100%' : '50px'};
@media screen and (max-width: 600px) {
    width:100%;
}
`
const Form = styled.form`
`
const handleAirportSelected = () => {
    console.log('selected');
}
const handleDateAndTime = () => {
    console.log("Handle date");
}

const CarPicker = () => {
    const [dates, setDates] = useState({
        pickUpDate: today,
        dropOffDate: new Date().setDate(today.getDate() + 3),
    })
    const [isDifferentLocation, setIsDifferentLocation] = useState(false);

    const handleCheckChange = (event) => {
        setIsDifferentLocation(event.target.checked)
    }

    const validateForm = () => {
        console.log('validating the form');
    }
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const justify = `${matches ? 'flex-end' : 'center'}`;
    return (
        <Form noValidate autoComplete="off">

            <Grid container
                direction='column'
                spacing={2}

            >
                <Grid item xs={12}

                >
                    <AirportSelect isPickupDate={true} handleAirportSelected={handleAirportSelected} />
                </Grid>
                <Grid
                    item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckChange}
                                color="primary"
                            />
                        }
                        label="Drop-off at different location"
                    />
                    {isDifferentLocation ?
                        <Grid item><AirportSelect isPickupDate={false} handleAirportSelected={handleAirportSelected} /></Grid> : null
                    }

                </Grid>
                <Grid container
                    spacing={2} >
                    <CarDatePicker
                        setDates={setDates}
                        isPickupDate={true}
                        handleDateAndTime={handleDateAndTime}
                    />
                </Grid>
                <Grid container
                    spacing={2}
                >
                    <CarDatePicker
                        isPickupDate={false}
                        handleDateAndTime={handleDateAndTime}
                    />
                </Grid>
                <Grid container justify='space-between' alignItems="center"  >
                    <Grid item sm={8} lg={8} xs={7}>

                        <div  >
                            <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> No credit card fees</div>
                            <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> No amendment fees</div>
                            <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> 24/7 phone support</div>
                        </div>
                    </Grid>
                    <Grid item justify='flex-end' sm={4} lg={4} xs={5}>
                    
                    <TextField
                    style={ {float:'right', maxWidth: '143px'}}
                            id="standard-number"
                            label="Your age"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>



            </Grid>

            <Grid container
                justify={justify}
            >
                <Grid xs={12} sm={8} md={4} lg={4} style={{ marginTop: '20px' }} item>
                    <Link style={{ textDecoration: 'none' }} to='/results'><SearchButton ispc={matches.valueOf.toString()} onClick={validateForm} variant='contained' color='secondary'>Search</SearchButton></Link>
                </Grid>
            </Grid>

        </Form >

    )
}

export default CarPicker
