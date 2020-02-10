import React from 'react'
import { Grid, Typography, Divider, TextField, MenuItem, useMediaQuery, useTheme } from '@material-ui/core'
import styled from 'styled-components';
const Form = styled.form`

`
const DriverDetailsForm = ({
    tempDriver,
    handleChange,
    driver,
    setDriver
}) => {

    const ispc = useMediaQuery(useTheme().breakpoints.up('sm'));

    return (
        <form style={{ width: '70%', padding: '20px', border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '4px' }} action="" noValidate>
            <Grid container direction='column'>
                <Grid item><Typography align='center' variant='h6'>Driver details</Typography></Grid>
                <Divider />
                <Grid item lg={3} md={3} sm={3} xs={12}>

                    <TextField
                        fullWidth
                        id="title"
                        select
                        label="Title"
                        name='title'
                        value={tempDriver.title}
                        // defaultValue='Please select'
                        onChange={event => handleChange(event)}
                    >
                        <MenuItem value='Mr'>Mr</MenuItem>
                        <MenuItem value='Mrs'>Mrs</MenuItem>
                        <MenuItem value='Mis'>MISS</MenuItem>
                        <MenuItem value='Dr'>Dr</MenuItem>
                        <MenuItem value='Ms'>Ms</MenuItem>
                    </TextField>
                </Grid>

                <Grid item sm xs={12} style={{ display: 'flex' }}>
                    <Grid container>
                        <Grid item sm xs={12}
                            style={{ marginRight: ispc ? '20px' : '0px' }}  >
                            <TextField
                                fullWidth
                                required
                                id="first-name"
                                label="First Name"
                                name="firstName"
                                value={tempDriver.firstName}
                                onChange={event => handleChange(event)}
                            />
                        </Grid>
                        <Grid item sm xs={12} >
                            <TextField
                                fullWidth
                                required
                                id="last-name"
                                label="Last Name"
                                name='lastName'
                                onChange={event => handleChange(event, 'lastname')}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <TextField fullWidth required id="email-address" label="Email address" defaultValue="" />
                </Grid>

                <Grid item >
                    <Grid container>
                        <Grid item sm xs={12} lg={6} style={{ marginRight: ispc ? '20px' : '0px' }}>
                            <TextField
                                fullWidth
                                required id="phone"
                                label="Phone"
                                defaultValue="" />
                        </Grid>
                        <Grid item sm lg={2}>
                            <TextField
                                id="driver-age"
                                label="Driver age"
                                type="number"
                                defaultValue={driver.age}
                            // onChange={event => setAge(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </form>

    )
}

export default DriverDetailsForm
