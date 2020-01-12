import React from 'react'
import styled from 'styled-components'
import { useTheme, Grid, Container } from '@material-ui/core'
import Picker from '../Content/Main/Picker/Picker'
import background from '../../images/background.png'
const MainSection = () => {
    const StyledSection = styled.section`
     margin-top: 94px;
     height: calc(100vh - 180px);
     width: 100%; 
     @media screen and (max-width: ${useTheme().breakpoints.values.sm}px) {
       padding-top: 0px;
       margin-top:0px;
       height: calc(100vh - 86px)
   }
   /* @media screen and (max-width:${useTheme().breakpoints.values.sm}){
       height: calc(100vh - 86px)
   }
   @media screen and (min-width:${useTheme().breakpoints.values.lg}){
       height: calc(100vh - 2 * 94px)
   } */

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
                    <Grid item xs={12} sm={10} lg={5} md={6} xl={5}  >
                        <Picker />
                    </Grid>
                </StyledContainer>
            </StyledSection>
    )
}

export default MainSection
