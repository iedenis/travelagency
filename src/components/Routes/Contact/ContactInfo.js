import React from 'react'
import { Typography, Box, Divider, Grid } from '@material-ui/core'
import MapContainer from './MapWidget'

const ContactInfo = () => {

    return (
        <Grid container spacing={1} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
            <Typography variant='h6'>Contact info</Typography>
            <Divider />
            <Grid item><Box marginTop='30px' fontWeight='fontWeightMedium'>we4travel</Box></Grid>
            <Grid item><Box>Address: Herzl St 30, Rishon LeZion, Israel</Box>  </Grid>
            <Grid item><Box>Phone: +972547777777 </Box></Grid>
            <Grid item><Box>Email: <a href='mailto:contacts@we4travel.com'>contacts@we4travel.com</a> </Box></Grid>
            <Grid container><MapContainer /></Grid>
        </Grid>
    )
}

export default ContactInfo
