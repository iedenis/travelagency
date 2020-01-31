import React from 'react'
import { Container } from '@material-ui/core'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fafafa;
    opacity: 0.7;
    
`

const Links = () => {

    return (
        <Container style={{marginTop: '10px'}}>
            <StyledLink to='/'>Home page | </StyledLink>

            <StyledLink to='/terms-of-use'>Terms of use | </StyledLink> 
            <StyledLink to='/faq'>Car rentals FAQ | </StyledLink>
            <StyledLink to='/privacy'>Privacy  </StyledLink>

        </Container>
    )
}

export default Links
