import React from 'react'
import { Button, Grid, useTheme } from '@material-ui/core'
import add_driver_icon from './images/add_driver.svg'
import baby_booster_icon from './images/baby_booster.svg'
import baby_car_seat_icon from './images/baby_car_seat .svg'
import gps_icon from './images/gps_icon.svg'
import styled from 'styled-components'
const AddInsurance = ({ handleNext, handleBack }) => {
    const Icon = styled.img`
    color: ${useTheme().palette.primary.main}
    width: 60px;
    height: 60px;
    `
    
    return (
        <>
        <Grid container direction='column'>
         <Grid item><Icon src={add_driver_icon} alt='add_driver_icon'/> Add additional driver</Grid>   
         <Grid item>  <Icon src={baby_booster_icon} alt='baby_booster_icon'/> Child booster</Grid> 
         <Grid item>  <Icon src={baby_car_seat_icon} alt='baby_car_seat_icon'/> Child seat</Grid> 
         <Grid item> <Icon src={gps_icon} alt='gps_icon'/> GPS</Grid> 
            
        </Grid>
        <Button onClick={handleBack} variant='contained' color='secondary'>Back</Button>

        <Button onClick={handleNext} variant='contained' color='secondary'>Next</Button>
        </>
    )
}

export default AddInsurance
