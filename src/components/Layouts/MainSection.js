import React from 'react'
import styled from 'styled-components'
import { useTheme, Grid } from '@material-ui/core'
import Picker from '../Content/Main/Picker/Picker'
import background from '../../images/background.png'
const MainSection = () => {
    const StyledSection = styled.section`
       /* transform: translateZ(-1px) scale(2);
     -webkit-transform transform: translateZ(-1px) scale(2);  */

    /* padding-top: 70px; */
     height: 666px;
     width: 100%; 
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
