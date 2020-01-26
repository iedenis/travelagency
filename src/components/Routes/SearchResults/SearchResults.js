import React from 'react'
import CarCard from '../../Layouts/CarCard/CarCard'
import { Container, Paper, Grid, Divider, useMediaQuery, useTheme } from '@material-ui/core'
import Picker from '../../Layouts/Picker/Picker'
import styled from 'styled-components'
import Order from './Order'
import Punto from '../.././../images/cars/punto.jpg'
import suszuki_alto from '../../../images/cars/suzuki_alto.png'
import Focus from '../../../images/cars/focus.jpg'
const LeftPane = styled(Paper)`
    max-width: 490px;
`
const Results = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

    const StyledContainer = styled(Container)`
    padding-top: 50px;
    backgroundColor: '#f9f9f9' ;
    margin-top: ${props => props.ismobile ? '0px' : '50px'};
`

    return (
        <div style={{ display: 'flex', flex: 1 }}>

            <StyledContainer ismobile={isMobile.toString()}>
                <Grid container spacing={1} style={{ border: '1px solid' }}>
                        
                    <Grid item lg={5} md={4} >
                        <LeftPane >
                            <Picker searchType='cars' />
                            <Divider />
                            <Order />
                        </LeftPane>
                    </Grid>

                    <Grid item lg={7} md={7}>
                        <CarCard car={Punto} carClass = 'M' />
                        <CarCard car ={suszuki_alto} carClass = 'M'/>
                        <CarCard car={Punto} carClass = 'C' />

                    </Grid>

                </Grid>
                {/* <Grid container style={{ border: '1px solid', maxWidth: '780px' }}>
                </Grid> */}
            </StyledContainer >
        </div>

    )
}

export default Results
