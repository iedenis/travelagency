import React from 'react'
import { useTheme } from "@material-ui/core/styles"
import styled from 'styled-components'
import { Button, Toolbar, Container } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const SignInButton = styled(Button)`
height: 15px;
.MuiButton-label{
    font-size: 0.5rem;
}
&.MuiButton-root{
    padding: 0;
}
`
const StyledToolbar = styled(Toolbar)`
top:0;
height: 30px;
background-color: ${props => props.color};
justify-content: flex-end;
&.MuiToolbar-regular{
    max-height:30px;
}
@media (min-width: 600px){
    &.MuiToolbar-regular {
    min-height: 30px;
    }
}
@media (max-width: 600px){
    &.MuiToolbar-regular {
    min-height: 30px;
    }
}
`
const StyledContainer= styled(Container)`
display:flex;
justify-content: flex-end;
`

const TopToolBar = (props) => {
    return (
        // <StyledDiv color={useTheme().palette.primary.dark}>
        <StyledToolbar color={useTheme().palette.primary.dark}>

                <StyledContainer>
                    <SignInButton variant='contained' color='secondary' >
                        <FontAwesomeIcon style={{ paddingRight: '0.3rem' }} icon={faUser} />
                        Sign in
                </SignInButton>
                </StyledContainer>


        </StyledToolbar>

        // </StyledDiv>

    )
}

export default TopToolBar
