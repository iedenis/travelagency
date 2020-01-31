import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'

const PageNotFound = () => {
    return (
        <Container  style={{ display: 'flex', flex: 1, }}>
            <Grid container justify='center' alignItems="center">
                <Grid item><Typography variant='h3' style={{ alignContent: 'center' }}>404 Page not found</Typography></Grid>
            </Grid>
        </Container>
    )
}

export default PageNotFound
