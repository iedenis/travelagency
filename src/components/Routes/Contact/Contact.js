import React from 'react'
import { Typography, Container, Grid, useTheme } from '@material-ui/core'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
    const Heading = styled.div`

    @media screen and (max-width: ${useTheme().breakpoints.values.md}px) {
        text-align:center;
    }
  `
    const Wrapper = styled(Container)`
    padding-top: 20px;
  display: flex;
  flex: 1;
  background-color:#fafafa;
  `

    return (
        <Wrapper style={{ flexDirection: 'column' }}>
            <Heading><Typography variant='h4'>Contact us</Typography></Heading>

            <Grid container style={{ flex: 1, alignItems: 'center' }} >
                <Grid style={{ padding: '10px' }} item xs={12} sm={6} >
                    <ContactForm />
                </Grid>
                <Grid style={{ padding: '10px' }} item xs={12} sm={6} >
                    <ContactInfo />
                </Grid>
            </Grid>
        </Wrapper >


    )
}

export default Contact
