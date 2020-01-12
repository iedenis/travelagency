import React from 'react'
import Popular from './Popular'
import { Container, Paper } from '@material-ui/core'
const SecondSection = () => {
    return (
        <div >
            <Paper>

            <Container 
            style={{ backgroundColor: '#fafafa'}}
            >
                <Popular />
            </Container>
            </Paper>

        </div>
    )
}

export default SecondSection
