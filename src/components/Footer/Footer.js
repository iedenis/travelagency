import React from 'react'
import styled from 'styled-components'
import { useTheme, Grid } from '@material-ui/core'
import BottomContactsBar from './BottomContactsBar'
const Footer = () => {
    const StyledFooter = styled.div`
    /* position:absolute;  */
    bottom:0; 
    background-color: ${useTheme().palette.primary.main};
    width: 100%;
    overflow: hidden;
    `
    return (
        <StyledFooter>
            <Grid container >
                {/* <Grid item style={{ borderBottom: '1px solid' }}>
                    HELLO
                </Grid> */}
                    <BottomContactsBar />

            </Grid>
        </StyledFooter>
    )
}

export default Footer
