import React from 'react'
import { Typography, Grid, Divider, Link } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck , faGasPump, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import mileage from './featureIcons/mileage.svg'
import styled from 'styled-components'
const Policies = () => {

    const MileagePolicyIcon = styled.img`
        width: 16px;
        height: 16px;

    `

    return (

        <Grid container>
            <Grid item lg={6} sm={6} md={6}>
                <Typography>Policies</Typography>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link >rental terms</Link>
                    <div><MileagePolicyIcon  src={mileage} alt='milage-policy' /> Mileage unlimited</div>
               <div><FontAwesomeIcon style={{color: '#008000'}} icon={faGasPump}/> Fuel from full to full</div>
               <div><FontAwesomeIcon style={{color: '#008000'}} icon={faMapMarker}/> Ben Gurion Airport</div>
                </div>
            </Grid>
            <Grid item>
                <Divider orientation="vertical" />
            </Grid>
            <Grid item style={{textAlign: 'left'}}>

                <Typography variant='body1' style={{marginLeft: '40px'}}>Included in the price:</Typography>

                <ul style={{ listStyle: 'none' }}>
                    <li><FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} /> AmendmentsTheft </li>
                    <li><FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} /> ProtectionCollision </li>
                    <li><FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} /> Damage Waiver </li>
                </ul>

            </Grid>
        </Grid>

    )
}

export default Policies
