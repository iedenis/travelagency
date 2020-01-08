import React from 'react'
import styled from 'styled-components'
//import background from '../images/background.png'
import { useTheme, Grid } from '@material-ui/core'
import Picker from '../Content/Main/Picker/Picker'

const MainSection = () => {
    const StyledSection = styled.section`
    padding-top: 70px;
     height: 100vh;
    width: 100%; 
    background-size: cover;
   @media screen and (max-width: ${useTheme().breakpoints.values.sm}px) {
       padding-top: 0px;
   }
}
`
    return (
        <StyledSection>
            <Grid item xs={12} sm={8} lg={6} md={6} >
                <Picker />
            </Grid>
        </StyledSection>
    )
}

export default MainSection
