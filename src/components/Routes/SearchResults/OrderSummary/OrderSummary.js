import React, { useState } from 'react'
import { TextField, Paper, Typography, Divider } from '@material-ui/core';
import styled from 'styled-components';
import DriverDetailsForm from './DriverDetailsForm';
import SummaryCard from './SummaryCard';
import { useEffect } from 'react';

const DetailsWraper = styled(Paper)`
background-color: #f5f5f5;
display: flex;
justify-content: center;
`

const FlightDetails = styled.div`
    width: 75%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px; 
`
const OrderSummary = ({
    driver: { driver, setDriver },
    driverAge,
    requestedCar,
    searchDetails,
    extras
}) => {

    // const ispc = useMediaQuery(useTheme().breakpoints.up('sm'));
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [tempDriver, setTempDriver] = useState({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: driverAge
    })

    const handleChange = (event, type) => {
        setTempDriver({ ...tempDriver, [event.target.name]: event.target.value })
    }

    
    return (
        <>
            <SummaryCard
                searchDetails={searchDetails}
                requestedCar={requestedCar}
                extras={extras}
            />
            <DetailsWraper>
                <DriverDetailsForm
                    tempDriver={tempDriver}
                    handleChange={handleChange}
                    driver={driver}
                    setDriver={setDriver}
                />
                <Divider />
            </DetailsWraper>

            <DetailsWraper  >
                <FlightDetails style={{ marginTop: '10px' }} >
                    <Typography align='center' variant='h6'>Flight details</Typography>
                    <TextField
                        fullWidth
                        id="flight-number"
                        label="Flight number"
                        name="flightNumber"

                    // value={flightNumber}
                    // onChange={event => handleChange(event)}
                    />

                </FlightDetails>
            </DetailsWraper>
        </>

    )
}

export default OrderSummary
