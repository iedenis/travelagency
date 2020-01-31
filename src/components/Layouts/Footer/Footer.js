import React from 'react'
import styled from 'styled-components'
import { useTheme, Grid, Divider } from '@material-ui/core'
import BottomContactsBar from './BottomContactsBar'
import QuickLinks from './QuickLinks'
import Links from './Links'
const Footer = () => {
    const StyledFooter = styled.div`
    /* margin-top:auto; */
    background-color: ${useTheme().palette.primary.main};
    width: 100%;
    overflow: hidden;
    `
    const StyledDivider = styled(Divider)`
    &.MuiDivider-root{
        background-color:rgba(255, 255, 255, 0.2);
        
    }
    `
    
    return (
        <StyledFooter>
            <Grid container direction='column' >
                <QuickLinks />
                <StyledDivider />
                <Links/>
                <BottomContactsBar />

            </Grid>
        </StyledFooter>
    )
}

export default Footer
