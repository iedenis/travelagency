import React, { useState } from 'react'
import { Button, Grid, useTheme, Box, Checkbox, useMediaQuery, InputLabel, Select, MenuItem, Paper, FormControlLabel, Divider, Typography } from '@material-ui/core'
import add_driver_icon from './images/add_driver.svg'
import baby_booster_icon from './images/baby_booster.svg'
import baby_car_seat_icon from './images/baby_car_seat.svg'
import gps_icon from './images/gps.svg'
import styled from 'styled-components'
import AlertDialog from '../../Layouts/AlertDialog';
import Alert from '@material-ui/lab/Alert';


const Wrapper = styled(Paper)`
    height: ${props => props.ismobile ? '100%' : '90vh'};
`

const Insurances = styled(Paper)`
    display:flex;
    flex-direction:column;
    margin-bottom: 16px;
`
const AddInsurance = ({

    additionalDriverPrice,
    childBoosterPrice,
    childSeatPrice,
    gpsPrice,

    handleNext,
    handleBack,
    currencySign,
    countries
}) => {

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
    const [travelCountries, setTravelCountries] = useState([])
    const [listOfCountries, setListOfCountries] = useState({ Germany: false, Poland: false, 'Czech Republic': false, Slovakia: false, Italy: false });
    const [addedInsurance, setAddedInsurance] = useState(false);
    const [travelToAnotherCountry, setTravelToAnotherCountry] = useState(false);
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

    const [open, setOpen] = useState(false);
    const [countriesListOpen, setCountriesListOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event) => {
        if (event === 'add') setAddedInsurance(true);
        if (event === 'Ok') {
        }
        handleNext();
        setOpen(false);
    };
    const handleClickCountriesListOpen = () => {
        console.log('HERE')
        setCountriesListOpen(true);
    }
    const handleCloseCountriesListClose = () => {
        setCountriesListOpen(false)
    }
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
    const handleTravel = () => {
        setCountriesListOpen(true)
    }
    /**
     * Components for heading and additional features
     */

    const Heading = ({ label }) => {
        return <Typography
            variant='h6'

            color='primary'
            style={{ paddingLeft: '18px' }}>
            {label}
        </Typography>
    }

    const AdditionalFeature = ({ icon, description, price, value }) => {

        return <Grid item xs={12} sm={12} lg={6}
            style={{ display: 'flex', padding: '10px', justifyContent: 'space-between' }} >
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
                    <span style={{ color: 'green' }}>Only {price}{currencySign} per day</span>
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

        <Wrapper ismobile={isMobile.toString()} >
            <Insurances  >
                <Heading label='Please add insurances to travel with real peace of mind' />
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
                    label={<Typography variant='h6'>Add excess charge refund coverage</Typography>}
                />

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
                    label={<Typography variant='h6'>Tires, Windshields and Other Coverages</Typography>}
                />
            </Insurances>

            <Paper style={{ marginBottom: '16px' }}>

                <Grid container direction='column' >
                    <Heading label='Extras' />
                    <AdditionalFeature
                        icon={add_driver_icon}
                        description='Add additional driver'
                        price={additionalDriverPrice}
                        value='driver'
                    />
                    <AdditionalFeature
                        icon={baby_booster_icon}
                        description='Child booster'
                        price={childBoosterPrice}
                        value='booster' />
                    <AdditionalFeature
                        icon={baby_car_seat_icon}
                        description='Child seat'
                        price={childSeatPrice}
                        value='child_seat'
                    />
                    <AdditionalFeature
                        icon={gps_icon}
                        description='GPS device'
                        price={gpsPrice}
                        value='gps'
                    />
                    <div>

                    </div>
                </Grid>
            </Paper>

            <Paper style={{ marginTop: '20px' }}>

                <Heading label="Travel to another country?" />
                <FormControlLabel
                    style={{ marginLeft: '10px' }}
                    control={
                        <Checkbox
                            checked={travelCountries.length > 0}
                            onChange={handleTravel}
                            value="insurance"
                            color="primary"
                        />
                    }
                    label={<Typography variant='h6'>I plan to travel to another country</Typography>}

                />
                <AlertDialog
                    dialogTitle={'List of countries you can travel to with the requested car'}
                    isCountryList={true}
                    handleClickOpen={handleClickCountriesListOpen}
                    handleClose={handleCloseCountriesListClose}
                    open={countriesListOpen}
                    listOfCountries={listOfCountries}
                    setListOfCountries={setListOfCountries}
                    travelCountries={travelCountries}
                    setTravelCountries={setTravelCountries}
                    buttonAccept={'I want to add the insurance'} //have to remove it
                    buttonReject={'Continue without insurance'}
                    setTravelToAnotherCountry={setTravelToAnotherCountry}

                />
            </Paper>
            <Alert style={{ marginTop: '20px' }} severity="success"><Typography variant='h6'>Good news, Full Insurance is available</Typography>
                Cover any bumps or scrapes and have a hassle-free rental. Book everything in one place quickly and easily.

</Alert>

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
                dialogContentText={'Please purchase our insurance ...'}
                dialogTitle={'Add Insurance'}
                buttonAccept={'I want to add the insurance'}
                buttonReject={'Continue without insurance'}
                isCountryList={false}
                listOfCountries={[]}
                travelCountries={{}}
            />


        </Wrapper>



    )
}

export default AddInsurance
