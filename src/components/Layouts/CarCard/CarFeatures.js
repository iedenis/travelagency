import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSuitcase, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
import Gearbox from './featureIcons/gearbox.svg'
import Seats from './featureIcons/seat.svg'
import Doors from './featureIcons/car-door.svg'
import { Grid, Tooltip } from '@material-ui/core'
import styled from 'styled-components'

const FeatureIcon = styled.img`
    width: 16px;
    height: 16px;
`

const CarFeatures = ({ transmissionType, numberOfSeats, numberOfLargeBags, numberOfSmallBags, numberOfDoors }) => {
    return (
        <Grid style={{ border: '1px solid' }} container direction='column'>
            <Grid item>
                <FontAwesomeIcon icon={faSnowflake} /> Aircondition

</Grid>
            <Grid item>
                <FontAwesomeIcon icon={faSuitcaseRolling} /> {numberOfSmallBags} Small bags

</Grid>
            <Grid item>
                <FontAwesomeIcon icon={faSuitcase} />

                {numberOfLargeBags}
                {/* <Tooltip title="Denis" arrow> */}
                    Large bags
                     {/* </Tooltip> */}

            </Grid>
            <Grid item>
                <FeatureIcon src={Gearbox} alt={Gearbox} /> {transmissionType} Gearbox
</Grid>
            <Grid item>
                <FeatureIcon src={Doors} /> {numberOfDoors} Doors
</Grid>
            <Grid item>
                <FeatureIcon src={Seats} /> {numberOfSeats} Seats
</Grid>


        </Grid>

    )
}

export default CarFeatures
