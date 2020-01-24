import React from 'react'
import styled from 'styled-components'
import { useTheme, Grid, Container, Hidden } from '@material-ui/core'
import Picker from '../../Layouts/Picker/Picker'
import backgroundImage from '../../../images/background.png'
import Companies from './MainSection/Companies'
import PromoSlider from './MainSection/PromoSlider'
import background_2 from '../../../images/assets/background_2.jpg'
const MainSection = () => {
    const StyledSection = styled.section`
/* background: rgb(185,43,39);
background: linear-gradient(90deg, rgba(185,43,39,1) 0%, rgba(21,101,192,1) 45%); */
/* background: rgb(137,247,254);
background: linear-gradient(90deg, rgba(137,247,254,1) 0%, rgba(102,166,255,1) 45%); */
background-image: url(${background_2});
     /* background-image: url(${backgroundImage});  */
     background-size: cover;
    /* padding-top: 50px; */
    height: calc(100vh - 94px);
    width: 100%; 
     @media screen and (max-width: ${useTheme().breakpoints.values.sm}px) {
       padding-top: 0px;
       margin-top:0px;
       height: calc(100vh - 55px);
       background-image: none;
   }
}
`
    const StyledContainer = styled(Container)`
     /* border: 5px solid;  */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height:100%;
        @media screen and (max-width: 600px) {
            &.MuiContainer-root{
                 padding: 0px;
                 justify-content:space-between;
            }
}
`
    return (
        <StyledSection>
            <StyledContainer>
                <Grid container >
                    <Grid container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                        <Grid item xs={12} sm={12} lg={5} md={6} xl={5}  >
                            <Picker />
                        </Grid>
                        <Hidden mdDown>
                            <Grid style={{ marginLeft: 'auto' }} item xs={12} sm={12} lg={5} md={6} xl={5}  >
                                <PromoSlider />
                            </Grid>
                        </Hidden>

                    </Grid>

                </Grid>
                <Grid item>
                    <Companies />
                </Grid>
            </StyledContainer>
        </StyledSection>
    )
}

export default MainSection
