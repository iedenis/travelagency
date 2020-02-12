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
            <Grid item 
            style={{padding:  '8px'}}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div><MileagePolicyIcon src={mileage} alt='milage-policy' /> Mileage unlimited</div>
                    <div><FontAwesomeIcon style={{ color: '#008000' }} icon={faGasPump} /> Fuel from full to full</div>
                    <div><FontAwesomeIcon style={{ color: '#008000' }} icon={faMapMarker} /> Ben Gurion Airport</div>
                    <Link >rental terms</Link>

                </div>
            </Grid>
        
        </Grid >

    )
}

export default Policies
