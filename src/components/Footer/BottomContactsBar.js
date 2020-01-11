import React from 'react'
import styled from 'styled-components'
import { Grid, Toolbar, Typography, Hidden } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@material-ui/core'
const BottomContactsBar = () => {

    const SocialBar = styled(Grid)`
         /* border: 1px solid; */
        max-width: 1280px;
        display: flex;
        align-items: center;
        @media screen and (max-width:900px){
            justify-content:center;
        }
     
`
    const SocialIcon = styled(FontAwesomeIcon)`
        color: #fff;
        margin-right:0.5rem;
        opacity: 0.7;
`
    const TradeMark = styled(Grid)`
     text-align:right;
     @media screen and (max-width: 900px){
         text-align:center;
     }
    `
    return (
        <Toolbar style={{ width: '100%' }}>
            <Grid
                container
                // justify='space-between'
                alignItems='center'
                justify='center'
            >
                <Hidden lgDown><Grid item style={{ border: '1px solid' }} xl={2} lg={2} /></Hidden>

                <SocialBar item xs={12} sm={6} md={6} lg={6} xl={6}  >
                    <Typography
                        variant='caption'
                        style={{ color: '#fff', marginRight: '1rem', opacity: 0.7 }}
                    >
                        <a href="mailto:contact@we4travel.com" rel="noopener noreferrer" target="_blank">   <SocialIcon icon={faEnvelope} /></a>
                        contact@we4travel.com
                       </Typography>
                    <a href="https://facebook.com" rel="noopener noreferrer" target="_blank"> <SocialIcon icon={faFacebook} /></a>
                    <a href="https://t.me/Holylandcars_bot" rel="noopener noreferrer" target="_blank"><SocialIcon icon={faTelegram} /></a>
                </SocialBar>
                <TradeMark item
                    xs={12} sm={6} lg={2} md={2} xl={2}

                >
                    <Typography
                        variant='caption'
                        style={{ color: '#fff', opacity: 0.7 }}

                    >
                        © 2019 www.we4travel.com
                       </Typography>
                </TradeMark>
                <Hidden lgDown><Grid item xl={2} lg={2} style={{ border: '1px solid' }}></Grid></Hidden>

            </Grid>
        </Toolbar >

    )
}

export default BottomContactsBar
