import React from 'react'
import { Typography, Grid, Divider, Link, useMediaQuery, useTheme } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faGasPump, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import mileage from './featureIcons/mileage.svg'
import styled from 'styled-components'

const MileagePolicyIcon = styled.img`
    width: 16px;
    height: 16px;
`
const List = styled.ul`
list-style: none;
padding-left: ${props => props.ismobile ? '0px' : '40px'};
`


const Policies = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
    return (

        <Grid container >
            <Grid item lg={4} sm={6} md={6} xs={12}
            style={{padding:  '8px'}}
            >
                <Typography>Policies</Typography>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link >rental terms</Link>
                    <div><MileagePolicyIcon src={mileage} alt='milage-policy' /> Mileage unlimited</div>
                    <div><FontAwesomeIcon style={{ color: '#008000' }} icon={faGasPump} /> Fuel from full to full</div>
                    <div><FontAwesomeIcon style={{ color: '#008000' }} icon={faMapMarker} /> Ben Gurion Airport</div>
                </div>
            </Grid>
            <Grid item xs={12} lg={1}             style={{padding:  '8px'}}
>

                <Divider style={{ marginTop: isMobile ? '8px': '0px'}} orientation={isMobile ? "horizontal" : "vertical"} />
            </Grid>
            <Grid item style={{padding:'8px', textAlign: 'left' }}>

                <Typography variant='body1' style={{  marginTop: isMobile ? '8px' : '0px' }}>Included in the price:</Typography>

                <List ismobile={isMobile.toString()} >
                    <li><FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} /> AmendmentsTheft </li>
                    <li><FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} /> ProtectionCollision </li>
                    <li><FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} /> Damage Waiver </li>
                </List>

            </Grid>
        </Grid >

    )
}

export default Policies
