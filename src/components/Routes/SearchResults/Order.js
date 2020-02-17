import React, { useState, useContext, useEffect } from 'react'
import { Container, Grid, Divider, useMediaQuery, useTheme, Stepper, Step, Typography, StepButton, Button, Hidden } from '@material-ui/core'
import Picker from '../../Layouts/Picker/Picker'
import styled from 'styled-components'
import SearchResults from './SearchResults'
import AddInsurance from './AddInsurance'
import OrderSummary from './OrderSummary/OrderSummary'
import PageNotFound from '../404/PageNotFound'
import Filters from './Filters'
import carModels from '../../Layouts/CarCard/carModels/carModels'
import { CurrencyContext } from '../../SharedState/SharedState';
import SearchDetailsContext from '../../../App'
import { useTranslation } from 'react-i18next'
const LeftPane = styled.div`
    display:flex;
    flex: 1;
    flex-direction: column;
    max-width: 490px;
    height: 100%;

`

const StyledContainer = styled(Container)`
    padding-top: 50px;
    backgroundColor: '#f9f9f9' ;
    margin-top: ${props => props.ismobile ? '0px' : '50px'};
`
const Order = ({ searchDetails }) => {
    const { t } = useTranslation();

    const extrasPrices = {
        childBoosterPrice: 5,
        childSeatPrice: 2,
        additionalDriverPrice: 4,
        gpsPrice: 3,
        currencyCode: 'USD'
    }

    /**
     * State block
     */
    const [filteredCars, setFilteredCars] = useState([])
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [completed, setCompleted] = useState({});
    const [currencySign, setCurrency] = useContext(CurrencyContext)
    // const searchDetails = useContext(SearchDetailsContext)
    /** Order start */

    const [requestedCar, setRequestedCar] = useState({
        carClass: 'Mini',
        carModel: 'Chevrolet Spark',
        numberOfSeats: '',
        numberOfLargeBags: 0,
        numberOfSmallBags: 0,
        numberOfDoors: 0,
        typeOfGearBox: '',
        image: '../../../components/Layouts/CarCard/carModels/images/focus.jpg',
        supplier: '',
        pricePerDay: ''

    })

    const [driver, setDriver] = useState({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: searchDetails.driverAge
    })
    const [extras, setExtras] = useState({
        driver: { isChecked: false, count: 0 },
        booster: { isChecked: false, count: 0 },
        child_seat: { isChecked: false, count: 0 },
        gps: { isChecked: false, count: 0 }
    });

    const [travelCountries, setTravelCountries] = useState([])
    const [listOfCountries, setListOfCountries] = useState({ Germany: false, Poland: false, 'Czech Republic': false, Slovakia: false, Italy: false });
    const [addedInsurance, setAddedInsurance] = useState(false);


    /**Order end */
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

    function getSteps() {
        return [`${t('stepper.chooseyourcar')}`, `${t('stepper.addinsurance')}`,`${t('stepper.ordersummary')}`];
    }
    const steps = getSteps();

    const handleBookButtonClicked = (carId) => {
        setRequestedCar(
            { ...cars[carId - 1] }
        )
        handleNext();
    }
    const [gearBoxChecked, setGearBoxChecked] = useState({
        Automatic: false,
        Manual: false
    })


    const cars = [
        {
            id: 1,
            carClass: 'Economy',
            carModel: 'Fiat Punto',
            numberOfSeats: 5,
            numberOfLargeBags: 1,
            numberOfSmallBags: 1,
            numberOfDoors: 4,
            typeOfGearBox: `${t('carcard.carfeatures.manualgear')}`,
            mileage: 'Unlimited',
            image: carModels.FiatPunto,
            supplier: 'Budget',
            pricePerDay: 35
        },
        {
            id: 2,
            carClass: 'Mini',
            carModel: 'Hyundai i10',
            numberOfSeats: 4,
            numberOfLargeBags: 0,
            numberOfSmallBags: 2,
            numberOfDoors: 2,
            typeOfGearBox: `${t('carcard.carfeatures.automaticgear')}`,
            mileage: 'Unlimited',
            image: carModels.Hyundai_i10,
            supplier: 'Avis',
            pricePerDay: 40
        },
        {
            id: 3,
            carClass: 'Economy',
            carModel: 'Hyundai I20',
            numberOfSeats: 5,
            numberOfLargeBags: 1,
            numberOfSmallBags: 1,
            numberOfDoors: 4,
            typeOfGearBox: `${t('carcard.carfeatures.manualgear')}`,
            mileage: 'Limited',
            image: carModels.Hyundai_i20,
            supplier: 'Europcar',
            pricePerDay: 38
        },
        {
            id: 4,
            carClass: 'Economy',
            carModel: 'Nissan Micra',
            numberOfSeats: 5,
            numberOfLargeBags: 1,
            numberOfSmallBags: 1,
            numberOfDoors: 4,
            typeOfGearBox: `${t('carcard.carfeatures.automaticgear')}`,
            mileage: 'Limited',
            image: carModels.Nissan_micra,
            supplier: 'Dollar',
            pricePerDay: 35
        },
        {
            id: 5,
            carClass: 'Mini',
            carModel: 'Chevrolet Spark',
            numberOfSeats: 4,
            numberOfLargeBags: 0,
            numberOfSmallBags: 2,
            numberOfDoors: 4,
            typeOfGearBox: `${t('carcard.carfeatures.automaticgear')}`,
            mileage: 'Unlimited',
            image: carModels.Chevrolet_spark,
            supplier: 'Thrifty',
            pricePerDay: 33
        },
        {
            id: 6,
            carClass: 'Compact',
            carModel: 'Subaru Impresa',
            numberOfSeats: 5,
            numberOfLargeBags: 2,
            numberOfSmallBags: 0,
            numberOfDoors: 4,
            typeOfGearBox: `${t('carcard.carfeatures.manualgear')}`,
            mileage: 'Unlimited',
            image: carModels.Subaru_impresa,
            supplier: 'Thrifty',
            pricePerDay: 38
        },
        {
            id: 7,
            carClass: 'SUV',
            carModel: 'Hyundai Tucson',
            numberOfSeats: 5,
            numberOfLargeBags: 3,
            numberOfSmallBags: 0,
            numberOfDoors: 4,
            typeOfGearBox: `${t('carcard.carfeatures.automaticgear')}`,
            mileage: 'Limited',
            image: carModels.Hyundai_tucson,
            supplier: 'Budget',
            pricePerDay: 45
        },
    ]


    const getStepContent = step => {
        switch (step) {
            case 0:
                return <SearchResults
                    requestedCar={requestedCar}
                    setRequestedCar={setRequestedCar}
                    searchResult={filteredCars.length !== 0 ? filteredCars : cars}
                    handleBookButtonClicked={handleBookButtonClicked}
                />;
            case 1:
                return <AddInsurance
                    extras={extras}
                    setExtras={setExtras}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    additionalDriverPrice={extrasPrices.additionalDriverPrice}
                    childBoosterPrice={extrasPrices.childBoosterPrice}
                    childSeatPrice={extrasPrices.childSeatPrice}
                    gpsPrice={extrasPrices.gpsPrice}
                    currencySign={currencySign}
                    listOfCountries={listOfCountries}
                    setListOfCountries={setListOfCountries}
                    addedInsurance={addedInsurance}
                    setAddedInsurance={setAddedInsurance}
                    travelCountries={travelCountries}
                    setTravelCountries={setTravelCountries}
                />
            case 2:
                return <OrderSummary
                    extras={extras}
                    requestedCar={requestedCar}
                    driver={{ driver, setDriver }}
                    searchDetails={searchDetails}
                />;
            // case 3: return <div>Payment</div>
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
    // const handleComplete = () => {
    //     const newCompleted = completed;
    //     newCompleted[activeStep] = true;
    //     setCompleted(newCompleted);
    //     handleNext();
    // };
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
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: '#f5f5f5' }}>

            <StyledContainer ismobile={isMobile.toString()}>
                <Grid container >
                    <Grid item sm style={{ marginBottom: '8px', borderRadius: '4px' }}>
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

                    <Grid item lg={4} md={4} sm={12} >
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

                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        {/* <SearchResults /> */}
                        {getStepContent(activeStep)}
                    </Grid>

                </Grid>

            </StyledContainer >
        </div>

    )
}


export default Order
