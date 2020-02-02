import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useTheme, Grid, Container, Hidden } from '@material-ui/core'
import Picker from '../../Layouts/Picker/Picker'
import backgroundImage from '../../../images/background.png'
import Companies from './MainSection/Companies'
import PromoSlider from './MainSection/PromoSlider'
import background_2 from '../../../images/assets/background_2.jpg'
import background_3 from '../../../images/background_2.png'
import background_4 from '../../../images/background_3.png'
import background_5 from '../../../images/background_4.png'
import { fadeOut } from 'react-animations';

const fadeInAnimation = keyframes`${fadeOut}`;

// const FadeInImage = styled.div`
//     animation: 5s ${fadeInAnimation};
// `;
const MainSection = () => {
    const [background, setBackground] = useState(background_4)

    const changeBackground = (country) => {
        // if (country === 'United Kingdom') {
        //     setBackground(background_4)
        // }
        // else {
        //     setBackground(background_4)
        // }
    }
    
    const StyledSection = styled.section`
        background-image: url(${props => props.background});
        /* animation: 5s ${fadeInAnimation}; */

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
    }`

    const StyledContainer = styled(Container)`
    z-index:1;
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
        <StyledSection background={background}>
            <StyledContainer>
                <Grid container >
                    <Grid container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' , marginRight: 'auto' }}>
                    <Grid item xs={12} sm={12} lg={5} md={6} xl={5}  >
                            <Picker />
                        </Grid>
                        <Hidden mdDown>
                            <Grid style={{marginLeft:'auto'}} item xs={12} sm={12} lg={5} md={6} xl={5}  >
                                <PromoSlider changeBackground={changeBackground} />
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
