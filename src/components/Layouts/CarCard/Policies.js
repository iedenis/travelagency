import React from 'react'
import { Typography, Grid, Divider, Link, useMediaQuery, useTheme } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faGasPump, faMapMarker, faQuestion } from '@fortawesome/free-solid-svg-icons'
import mileage from './featureIcons/mileage.svg'
import styled from 'styled-components'

const MileagePolicyIcon = styled.img`
    width: 16px;
    height: 16px;
`
const List = styled.ul`
    padding-left:0px;
    list-style: none;
/* padding-left: ${props => props.ismobile ? '0px' : '40px'}; */
`


const Policies = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
    return (
        <Grid container justify='center' >
            <Grid item style={{ padding: '8px' }} >
                <List >
                    <li><MileagePolicyIcon src={mileage} alt='milage-policy' /> Mileage unlimited</li>
                    <li><FontAwesomeIcon style={{ color: '#008000' }} icon={faGasPump} /> Fuel from full to full</li>
                    <li><FontAwesomeIcon style={{ color: '#008000' }} icon={faMapMarker} /> Ben Gurion Airport</li>
                    <li><FontAwesomeIcon style={{ color: '#008000' }} icon={faQuestion} /><Link > Rental Conditions</Link> </li>
                </List>
            </Grid>

        </Grid >

    )
}

export default Policies
