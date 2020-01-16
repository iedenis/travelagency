import React from 'react'
import { Typography, Box, Divider, Grid } from '@material-ui/core'
import MapContainer from './MapWidget'
import styled from 'styled-components'
const ContactInfo = () => {
    const Wrapper = styled(Grid)`
display: flex;
flex-direction: column;
max-width: 400px;
@media screen  and (max-width: 600px){
    margin-left: auto;
}
`
    return (
        <Wrapper container justify="center" spacing={1} style={{ maxWidth: '600px', marginLeft: 'auto' }}>
            <Typography align="center" variant='h6'>Contact info</Typography>
            <Divider />
            <Grid item><Box marginTop='30px' fontWeight='fontWeightMedium'>we4travel</Box></Grid>
            <Grid item><Box>Address: Herzl St 30, Rishon LeZion, Israel</Box>  </Grid>
            <Grid item><Box>Phone: +972547777777 </Box></Grid>
            <Grid item><Box>Email: <a href='mailto:contacts@we4travel.com'>contacts@we4travel.com</a> </Box></Grid>
            <Grid item><MapContainer /></Grid>
        </Wrapper>
    )
}

export default ContactInfo
