import React from 'react'
import { Paper, Typography, Container, Grid } from '@material-ui/core'
import styled from 'styled-components'
import MapContainer from './MapWidget'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
//AIzaSyABGrJ2UtnLtpCGTT89SK41P0Iv6_rPm9Y

const Contact = () => {
    const Wrapper = styled(Paper)`
  `

    return (
        <Container  style={{ height:'WebkitCalc(~"100% - 10px")',backgroundColor: '#fafafa' }}>
            <Typography variant='h4'>Contact us</Typography>

            <Grid container justify='space-around' alignItems="flex-end">
                <Grid item xs={12} sm={6} lg>
                    <ContactForm />
                </Grid>
                <Grid item xs={12} sm={6} lg>
                    <ContactInfo />
                </Grid>
            </Grid>
        </Container>


    )
}

export default Contact
