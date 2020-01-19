import React from 'react'
import CarCard from '../../Layouts/CarCard/CarCard'
import { Container, Paper, Grid, Divider } from '@material-ui/core'
import Picker from '../../Layouts/Picker/Picker'
import styled from 'styled-components'
import Order from './Order'
const LeftPane = styled(Paper)`
    max-width: 490px;
    height: 300px;
`
const Results = () => {
    return (
        <Container style={{ marginTop: '50px', backgroundColor: '#f9f9f9', display: 'flex', flex: 1 }}>
            <Grid container style={{ border: '1px solid', maxWidth: '500px' }}>
                <Grid item >
                    <LeftPane >
                        <Picker />
                        <Divider />
                        <Order />
                    </LeftPane>
                </Grid>
            </Grid>
            <Grid container style={{ border: '1px solid' }}>
                <Grid item >
                    <CarCard />
                </Grid>
            </Grid>
        </Container >
    )
}

export default Results
