import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSuitcase, faSuitcaseRolling, faCheck } from '@fortawesome/free-solid-svg-icons'
import Gearbox from './featureIcons/gearbox.svg'
import Seats from './featureIcons/seat.svg'
import Doors from './featureIcons/car-door.svg'
import { Grid, Tooltip, Typography, useTheme, useMediaQuery, Box, Divider } from '@material-ui/core'
import styled from 'styled-components'
import { CurrencyContext } from '../../SharedState/SharedState'
import Policies from './Policies'

const FeatureIcon = styled.img`
    width: 16px;
    height: 16px;
`

const FeatureIconFontAwesome = styled(FontAwesomeIcon)`
    font-size: 16px;`

const ListItem = styled.li`
    opacity: ${props => props.iszero === undefined || props.iszero > 0 ? 1 : 0.3}
    list-style: none;
    span{
        margin-left: 5px;
    }
`


const CarFeatures = ({ pricePerDay, transmissionType, numberOfSeats, numberOfLargeBags, numberOfSmallBags, numberOfDoors }) => {

    const currency = useContext(CurrencyContext)
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

    return (
        <Grid
            style={{
                display: 'flex',
                flex: 1,
                // border: '1px solid'
            }}
            container direction={isMobile ? 'column-reverse' : 'row'}   >
            <Grid item xs={12} md style={{padding:'8px', display: isMobile ? 'flex' : '', justifyContent: 'center' }} >
                <ul style={{paddingLeft:'0px'}}>
                    <ListItem><FeatureIconFontAwesome icon={faSnowflake} /> <span>Aircondition</span></ListItem>
                    <ListItem iszero={numberOfSmallBags}>
                        <Tooltip disableHoverListener={isMobile} title={'This car can hold ' + (numberOfSmallBags === 1 ? '1 Small bag' : `${numberOfSmallBags} Small bags`)} arrow>
                            <div>
                                <FeatureIconFontAwesome icon={faSuitcaseRolling} /> {numberOfSmallBags === 1 ? <span>1 Small bag</span> : numberOfSmallBags === 0 ? <span>small bags</span> : <span>{numberOfSmallBags}  Small bags</span>}
                            </div>
                        </Tooltip>

                    </ListItem>
                    <Tooltip disableHoverListener={isMobile} title={'This car can hold ' + (numberOfLargeBags === 1 ? '1 Large bag' : `${numberOfLargeBags} Large bags`)} arrow>

                        <ListItem iszero={numberOfLargeBags}><FeatureIconFontAwesome icon={faSuitcase} />{numberOfLargeBags === 1 ? <span>1 Large bag</span> : numberOfLargeBags === 0 ? <span>Large bags</span> : <span>{numberOfLargeBags} Large bags</span>}
                        </ListItem>
                    </Tooltip>
                    <ListItem ><FeatureIcon src={Gearbox} alt={Gearbox} /> <span>{transmissionType} Gearbox</span></ListItem>
                    <ListItem><FeatureIcon src={Doors} /> <span>{numberOfDoors} Doors</span></ListItem>
                    <ListItem><FeatureIcon src={Seats} /><span>{numberOfSeats} Seats</span> </ListItem>

                </ul>
            </Grid>
        </Grid >


    )
}

export default CarFeatures
