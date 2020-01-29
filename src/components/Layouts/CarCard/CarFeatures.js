import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSuitcase, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
import Gearbox from './featureIcons/gearbox.svg'
import Seats from './featureIcons/seat.svg'
import Doors from './featureIcons/car-door.svg'
import { Grid, Tooltip, Typography, useTheme } from '@material-ui/core'
import styled from 'styled-components'
import { CurrencyContext } from '../../SharedState/SharedState'
const FeatureIcon = styled.img`
    width: 16px;
    height: 16px;
`

const FeatureIconFontAwesome = styled(FontAwesomeIcon)`
font-size: 16px;`
const ListItem = styled.li`
opacity: ${props => props.iszero === undefined || props.iszero > 0 ? 1 : 0.3}
list-style: none;
`
const StyledTooltip = styled(Tooltip)`
    .mui-tooltip{
        font-size:10px;
    }
`
const CarFeatures = ({ transmissionType, numberOfSeats, numberOfLargeBags, numberOfSmallBags, numberOfDoors }) => {
    const currency = useContext(CurrencyContext)
    return (
        <Grid
            //  style={{ border: '1px solid' }} 
            container >
            <Grid item sm>

                <ul>
                    <ListItem><FeatureIconFontAwesome icon={faSnowflake} /> Aircondition</ListItem>
                    <ListItem>
                        <Tooltip title={'This car can hold ' + (numberOfSmallBags === 1 ? '1 Small bag' : numberOfSmallBags + ' Small bags')} arrow>
                            <div>
                                <FeatureIconFontAwesome icon={faSuitcaseRolling} /> {numberOfSmallBags === 1 ? ' 1 Small bag' : numberOfSmallBags + ' Small bags'}
                            </div>
                        </Tooltip>

                    </ListItem>
                    <ListItem iszero={numberOfLargeBags}><FeatureIconFontAwesome icon={faSuitcase} />{numberOfLargeBags === 1 ? ' 1 Large bag' : numberOfLargeBags === 0 ? ' Large bags' : numberOfLargeBags + ' Large bags'}
                    </ListItem>

                </ul>
            </Grid>
            <Grid item sm
            // item style={{ border: '1px solid' }}
            >
                <ul>
                    <ListItem ><FeatureIcon src={Gearbox} alt={Gearbox} /> {transmissionType} Gearbox</ListItem>
                    <ListItem><FeatureIcon src={Doors} /> {numberOfDoors} Doors</ListItem>
                    <ListItem><FeatureIcon src={Seats} /> {numberOfSeats} Seats</ListItem>

                </ul>
            </Grid>
            <Grid item sm style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography style={{ justifyContent: 'flex-end', paddingRight: '2rem' }} variant='h5'><span style={{ fontWeight: 'bolder' }}>400 </span>{currency}</Typography>
            </Grid>


        </Grid >


    )
}

export default CarFeatures
