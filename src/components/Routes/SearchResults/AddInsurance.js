import React, {useState} from 'react'
import { Button, Grid, useTheme, Box, Checkbox, useMediaQuery, InputLabel, Select, MenuItem, Paper, FormControlLabel, Divider, Typography } from '@material-ui/core'
import add_driver_icon from './images/add_driver.svg'
import baby_booster_icon from './images/baby_booster.svg'
import baby_car_seat_icon from './images/baby_car_seat.svg'
import gps_icon from './images/gps.svg'
import styled from 'styled-components'
import AlertDialog from '../../Layouts/AlertDialog';

const Wrapper = styled(Paper)`
    height: ${props => props.ismobile ? '100%' : '90vh'};
`
const AddInsurance = ({ handleNext, handleBack }) => {

    const Icon = styled.img`
    color: ${useTheme().palette.primary.main}
    width: 60px;
    height: 60px;
    `
    const [checked, setChecked] = React.useState({
        driver: { isChecked: false, count: 0 },
        booster: { isChecked: false, count: 0 },
        child_seat: { isChecked: false, count: 0 },
        gps: { isChecked: false, count: 0 }
    });
    const [addedInsurance, setAddedInsurance] = useState(false);
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event) => {
        if (event === 'add') setAddedInsurance(true);
        handleNext();
        setOpen(false);
    };


    const handleAddInsurance = event => {
        console.log(event.target.checked)
        setAddedInsurance(event.target.checked)
    }
    const handleChange = name => event => {
        console.log(checked[name])
        const checkValue = event.target.checked;
        checkValue ? setChecked({ ...checked, [name]: { isChecked: checkValue, count: 1 } }) :
            setChecked({ ...checked, [name]: { isChecked: checkValue, count: 0 } })
    };
    const handleSelect = name => event => {
        setChecked({
            ...checked, [name]: {
                isChecked: (event.target.value > 0) || false,
                count: event.target.value
            }
        })
    }

    const AdditionalFeature = ({ icon, description, price, value }) => {

        return <Grid xs={12} sm={12} lg={6} item style={{ display: 'flex', padding: '10px', justifyContent: 'space-between' }} >
            <Box display='flex'>
                <Checkbox
                    checked={checked[value].isChecked}
                    value={value}
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={handleChange(value)}
                />

                <Icon src={icon} alt={icon} />
                <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <span style={{ color: 'green' }}>Only {price} per day</span>
                    <span>{description}</span>
                </div>



            </Box>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={checked[value].count}
                onChange={handleSelect(value)}
            >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
            </Select>

        </Grid>

    }

    return (
        <>
            <Wrapper ismobile={isMobile.toString()} >

                <Grid container direction='column' >

                    <AdditionalFeature
                        icon={add_driver_icon}
                        description='Add additional driver'
                        price='5$'
                        value='driver'
                    />
                    <AdditionalFeature
                        icon={baby_booster_icon}
                        description='Child booster'
                        price='2$'
                        value='booster' />
                    <AdditionalFeature
                        icon={baby_car_seat_icon}
                        description='Child seat'
                        price='2$'
                        value='child_seat'
                    />
                    <AdditionalFeature
                        icon={gps_icon}
                        description='GPS device'
                        price='1$'
                        value='gps'
                    />
                    <div>
                        <div style={{ marginTop: '40px', border: '1px solid #1F398D', borderRadius: '5px' }}>

                            <FormControlLabel
                                style={{ marginLeft: '10px' }}
                                control={
                                    <Checkbox
                                        checked={addedInsurance}
                                        onChange={event => setAddedInsurance(event.target.checked)}
                                        value="insurance"
                                        color="primary"
                                    />
                                }
                                label={<Typography variant='h6'>Add excess charge refund option</Typography>}
                            />
                        </div>
                    </div>
                </Grid>
                <Button style={{ marginRight: '20px', marginTop: '20px', border: '1px solid' }} size="small" onClick={handleBack}>
                    Back
        </Button>
                <Button style={{ marginTop: '20px', border: '1px solid' }} size="small" onClick={addedInsurance ? handleNext : handleClickOpen}>
                    Next
            </Button>
                <AlertDialog
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    open={open}
                    setAddedInsurance={setAddedInsurance}
                />
            </Wrapper>




        </>

    )
}

export default AddInsurance
