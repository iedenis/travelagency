import React from 'react'
import styled from 'styled-components'
import { Grid, Toolbar, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@material-ui/core'
const BottomContactsBar = () => {

    const SocialBar = styled(Grid)`
        /* border: 1px solid; */
        display: flex;
        align-items: center;
`
    const SocialIcon = styled(FontAwesomeIcon)`
        color: #fff;
        margin-right:0.5rem;
        opacity: 0.7;
`
    return (
        <Toolbar style={{ width: '100%' }}>
            <Grid
                container
                justify='space-between'
                alignItems='center'
            >
                <SocialBar item lg={8} md={8}>
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
                <Grid item lg={4}
                // style={{ border: '1px solid' }}
                >
                    <Typography
                        variant='caption'
                        style={{ color: '#fff', opacity: 0.7 }}
                    >
                        © 2019 www.we4travel.com
                       </Typography>
                </Grid>
            </Grid>
        </Toolbar >

    )
}

export default BottomContactsBar
