import React, { useState, useEffect } from 'react'
import { Container, Paper, Grid, Divider, useMediaQuery, useTheme, Stepper, Step, StepLabel, Typography, StepButton, Button } from '@material-ui/core'
import Picker from '../../Layouts/Picker/Picker'
import styled from 'styled-components'
import SearchResults from './SearchResults'
import AddInsurance from './AddInsurance'
import OrderConfirmation from './OrderConfirmation'
import PageNotFound from '../404/PageNotFound'
import Filters from './Filters'
import carModels from '../../Layouts/CarCard/carModels/carModels'


const LeftPane = styled(Paper)`
    max-width: 490px;
`

const Order = () => {
    const [cars, setCars] = useState([
        {
            carClass: 'Economy',
            carModel: 'Fiat Punto',
            numberOfSeats: 5,
            numberOfLargeBags: 1,
            numberOfSmallBags: 1,
            numberOfDoors: 4,
            typeOfGearBox: 'Manual',
            image: carModels[1],
            supplier: 'Budget'
        },
        {
            carClass: 'Mini',
            carModel: 'Hyundai i10',
            numberOfSeats: 4,
            numberOfLargeBags: 0,
            numberOfSmallBags: 2,
            numberOfDoors: 2,
            typeOfGearBox: 'Manual',
            image: carModels[3],
            supplier: 'Avis'
        },
        {
            carClass: 'Economy',
            carModel: 'Hyundai I20',
            numberOfSeats: 5,
            numberOfLargeBags: 1,
            numberOfSmallBags: 1,
            numberOfDoors: 4,
            typeOfGearBox: 'Automatic',
            image: carModels[4],
            supplier: 'Europcar'
        }
    ])
    let suppliers = [];
    useEffect(() => {
        for (let i = 0; i < cars.length; i++) {
            if (!suppliers.includes(cars[i].supplier)) suppliers.push(cars[i].supplier)
        }
    }, [])
    const [filteredCars, setFilteredCars] = useState(cars)
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [completed, setCompleted] = useState({});
    let filterOptions;
    const StyledContainer = styled(Container)`
    padding-top: 50px;
    backgroundColor: '#f9f9f9' ;
    margin-top: ${props => props.ismobile ? '0px' : '50px'};
`
    function getSteps() {
        return ['Choose your car', 'Add insurance', 'Order confirmation'];
    }
    const steps = getSteps();

    const handleBookButtonClicked = () => {
        handleNext();
    }
    const handleFilter = () => {
        console.log("CLICKED");
    }


    const getStepContent = step => {
        switch (step) {
            case 0:
                return <SearchResults searchResult={cars} filterOptions={filterOptions} handleBookButtonClicked={handleBookButtonClicked} />;
            case 1:
                return <AddInsurance handleNext={handleNext} handleBack={handleBack} />
            case 2:
                return <OrderConfirmation />;
            default:
                return <PageNotFound />;
        }
    }

    const isStepSkipped = step => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
    const handleStep = step => () => {
        setActiveStep(step);
    };
    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    const completedSteps = () => {
        return Object.keys(completed).length;
    };
    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };
    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };
    const totalSteps = () => {
        return steps.length;
    };


    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };
    console.log(suppliers);
    return (
        <div style={{ display: 'flex', flex: 1 }}>

            <StyledContainer ismobile={isMobile.toString()}>
                <Grid container>
                    <Grid item sm>

                        <Stepper nonLinear activeStep={activeStep}>
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepButton onClick={handleStep(index)} completed={completed[index]}>
                                        {label}
                                    </StepButton>
                                </Step>
                            ))}
                        </Stepper>
                    </Grid>

                </Grid>

                <div>
                    {allStepsCompleted() ? (
                        <div>
                            <Typography >
                                All steps completed - you&apos;re finished
            </Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                            <div>
                                <div>
                                    {/* <Button disabled={activeStep === 0} onClick={handleBack} >
                                        Back
              </Button> */}
                                    {/* <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}

                                    >
                                        Next
              </Button> */}
                                    {/* {activeStep !== steps.length &&
                                        (completed[activeStep] ? (
                                            <Typography variant="caption" >
                                                Step {activeStep + 1} already completed
                  </Typography>
                                        ) : (
                                                <Button variant="contained" color="primary" onClick={handleComplete}>
                                                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                                </Button>
                                            ))} */}
                                </div>
                            </div>
                        )}
                </div>






                <Grid container spacing={1} style={{ border: '1px solid' }}>

                    <Grid item lg={4} md={4} >
                        <LeftPane >
                            <Picker searchType='cars' />
                            <Divider />
                            <Filters suppliers={suppliers} fetchedCars={{ cars, setCars }} handleFilter={handleFilter} />
                        </LeftPane>
                    </Grid>

                    <Grid item lg={8} md={7}>
                        {/* <SearchResults /> */}
                        {getStepContent(activeStep)}
                    </Grid>

                </Grid>
                {/* <Grid container style={{ border: '1px solid', maxWidth: '780px' }}>
                </Grid> */}
            </StyledContainer >
        </div>

    )
}

export default Order
