import React, { useState, useEffect } from 'react'
import { Container, Paper, Grid, Divider, useMediaQuery, useTheme, Stepper, Step, StepLabel, Typography, StepButton, Button, Hidden } from '@material-ui/core'
import Picker from '../../Layouts/Picker/Picker'
import styled from 'styled-components'
import SearchResults from './SearchResults'
import AddInsurance from './AddInsurance'
import OrderConfirmation from './OrderConfirmation'
import PageNotFound from '../404/PageNotFound'
import Filters from './Filters'
import carModels from '../../Layouts/CarCard/carModels/carModels'


const LeftPane = styled.div`
display:flex;
flex: 1;
flex-direction: column;
    max-width: 490px;
    height: 100%;

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
            mileage: 'Unlimited',
            image: carModels.FiatPunto,
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
            mileage: 'Unlimited',
            image: carModels.Hyundai_i10,
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
            mileage: 'Limited',
            image: carModels.Hyundai_i20,
            supplier: 'Europcar'
        },
        {
            carClass: 'Economy',
            carModel: 'Nissan Micra',
            numberOfSeats: 5,
            numberOfLargeBags: 1,
            numberOfSmallBags: 1,
            numberOfDoors: 4,
            typeOfGearBox: 'Automatic',
            mileage: 'Limited',
            image: carModels.Nissan_micra,
            supplier: 'Dollar'
        },
        {
            carClass: 'Mini',
            carModel: 'Chevrolet Spark',
            numberOfSeats: 4,
            numberOfLargeBags: 0,
            numberOfSmallBags: 2,
            numberOfDoors: 4,
            typeOfGearBox: 'Manual',
            mileage: 'Unlimited',
            image: carModels.Chevrolet_spark,
            supplier: 'Thrifty'
        },
        {
            carClass: 'Compact',
            carModel: 'Subaru Impresa',
            numberOfSeats: 5,
            numberOfLargeBags: 2,
            numberOfSmallBags: 0,
            numberOfDoors: 4,
            typeOfGearBox: 'Automatic',
            mileage: 'Unlimited',
            image: carModels.Subaru_impresa,
            supplier: 'Thrifty'
        },
        {
            carClass: 'SUV',
            carModel: 'Hyundai Tucson',
            numberOfSeats: 5,
            numberOfLargeBags: 3,
            numberOfSmallBags: 0,
            numberOfDoors: 4,
            typeOfGearBox: 'Automatic',
            mileage: 'Limited',
            image: carModels.Hyundai_tucson,
            supplier: 'Budget'
        },

    ])
    const [filteredCars, setFilteredCars] = useState([])
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [completed, setCompleted] = useState({});

    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

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

    const [gearBoxChecked, setGearBoxChecked] = useState({
        Automatic: false,
        Manual: false
    })

    const getStepContent = step => {
        switch (step) {
            case 0:
                return <SearchResults searchResult={filteredCars.length !== 0 ? filteredCars : cars} handleBookButtonClicked={handleBookButtonClicked} />;
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

    const removeDuplicates = (array) => {
        return Array.from(new Set(array.map(a => a.supplier)))
            .map(supplier => {
                return array.find(a => a.supplier === supplier)
            })
    }
    const [suppliersList, setSuppliersList] = useState(
        removeDuplicates(cars.map(car => {
            return { supplier: car.supplier, checked: false }
        }))
    )
    const [MileageChecked, setMileageChecked] = useState({
        Limited: false,
        Unlimited: false
    })

    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>

            <StyledContainer ismobile={isMobile.toString()}>
                <Grid container >
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

                <Grid container spacing={1} >

                    <Grid item lg={4} md={4} >
                        <LeftPane >
                            <Hidden smDown>
                                <Picker searchType='cars' />
                            </Hidden>

                            <Divider />
                            {activeStep === 0 ? <Filters
                                cars={cars}
                                filteredCars={{ filteredCars, setFilteredCars }}
                                gearboxChecked={{ gearBoxChecked, setGearBoxChecked }}
                                suppliers={{ suppliersList, setSuppliersList }}
                                mileage={{ MileageChecked, setMileageChecked }}
                            /> : null}
                        </LeftPane>
                    </Grid>

                    <Grid item lg={8} md={7} >
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
