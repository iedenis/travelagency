import React from 'react'
import styled from 'styled-components'
import { useTheme, Button, Container, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
const ContactSection = () => {
    const Section = styled.section`
    display:flex;
    align-items: center;
    height: 150px;
        width:100%;
        background-color: ${useTheme().palette.primary.main};
`
    const ContactButton = styled(Button)`

`
    const StyledContainer = styled(Container)`
display:flex;
justify-content: space-around;
`
    const Text = styled.div`
    color: ${useTheme().palette.secondary.contrastText};
`
    return (
        <Section>
            <StyledContainer >
                <Typography variant='h5'>
                    <Text>
                        If you have any question please contact us
                    </Text>
                </Typography>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <ContactButton variant='contained' color='secondary' >Feel free to contact us</ContactButton>
                </Link>
            </StyledContainer>


        </Section>
    )
}

export default ContactSection
