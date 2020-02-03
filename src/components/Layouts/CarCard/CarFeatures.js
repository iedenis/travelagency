import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSuitcase, faSuitcaseRolling, faCheck } from '@fortawesome/free-solid-svg-icons'
import Gearbox from './featureIcons/gearbox.svg'
import Seats from './featureIcons/seat.svg'
import Doors from './featureIcons/car-door.svg'
import { Grid, Tooltip, Typography, useTheme, useMediaQuery, Box } from '@material-ui/core'
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
    span{
        margin-left: 5px;
    }
`
const StyledTooltip = styled(Tooltip)`
    .mui-tooltip{
        font-size:10px;
    }
`
const PriceGridItem = styled(Grid)`
    /* border: 1px solid; */
    /* padding:16px;
    padding-left: ${props => props.ismobile ? '40px' : '16px'}; */
    display: flex;
    justify-content: ${props => props.ismobile ? 'flex-start' : 'flex-end'}
    flex: 1;
`
const CarFeatures = ({ price_per_day, transmissionType, numberOfSeats, numberOfLargeBags, numberOfSmallBags, numberOfDoors }) => {


    const currency = useContext(CurrencyContext)
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

    return (
        <Grid
            style={{
                display: 'flex',
                border: '1px solid'
            }}
            container direction={isMobile ? 'column-reverse' : 'row'}   >
            <Grid item lg={4} md >
                <ul>
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

                </ul>
            </Grid>
            <Grid item lg={4} md
            >
                <ul>
                    <ListItem ><FeatureIcon src={Gearbox} alt={Gearbox} /> <span>{transmissionType} Gearbox</span></ListItem>
                    <ListItem><FeatureIcon src={Doors} /> <span>{numberOfDoors} Doors</span></ListItem>
                    <ListItem><FeatureIcon src={Seats} /><span>{numberOfSeats} Seats</span> </ListItem>
                </ul>
            </Grid>
            <PriceGridItem item sm lg={4} md ismobile={isMobile.toString()} >
                <ul>
                    <ListItem>
                        <Box fontSize='21px' style={{ fontWeight: 'bolder' }}>{price_per_day} {currency}
                            <span style={{ fontWeight: 'lighter', fontSize: '1rem' }}>per day</span>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box fontWeight='normal' style={{ marginTop: '8px' }}>
                            <Tooltip title="FREE cancellation up to 48 hours " arrow>

                                <Typography variant='body1'> <FontAwesomeIcon style={{ color: 'green', marginRight: '8px' }} icon={faCheck} />Free Cancellation</Typography>
                            </Tooltip>
                        </Box>

                    </ListItem>

                </ul>

            </PriceGridItem>
        </Grid >


    )
}

export default CarFeatures
