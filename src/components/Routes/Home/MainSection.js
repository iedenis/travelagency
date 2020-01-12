import React from 'react'
import styled from 'styled-components'
import { useTheme, Grid, Container } from '@material-ui/core'
import Picker from './Main/Picker/Picker'
import backgroundImage from '../../../images/background.png'

const MainSection = () => {
    const StyledSection = styled.section`
    background-image: url(${backgroundImage});
    background-size: cover;
    padding-top: 50px;
    height: calc(100vh - 94px);
    width: 100%; 
     @media screen and (max-width: ${useTheme().breakpoints.values.sm}px) {
       padding-top: 0px;
       margin-top:0px;
       height: calc(100vh - 86px);
       background-image: none;

   }
}
`
    const StyledContainer = styled(Container)`
        @media screen and (max-width: 600px) {
            &.MuiContainer-root{
                 padding: 0px;
            }
}
`
    return (
        <StyledSection>
            <StyledContainer>
                <Grid item xs={12} sm={12} lg={5} md={6} xl={5}  >
                    <Picker />
                </Grid>
            </StyledContainer>
        </StyledSection>
    )
}

export default MainSection
