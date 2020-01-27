import React from 'react'
import { Container, Paper, Grid, Divider, useMediaQuery, useTheme, Stepper, Step, StepLabel, Typography, StepButton, Button } from '@material-ui/core'
import Picker from '../../Layouts/Picker/Picker'
import styled from 'styled-components'
import SearchResults from './SearchResults'



const LeftPane = styled(Paper)`
    max-width: 490px;
`
const Order = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [completed, setCompleted] = React.useState({});

    const StyledContainer = styled(Container)`
    padding-top: 50px;
    backgroundColor: '#f9f9f9' ;
    margin-top: ${props => props.ismobile ? '0px' : '50px'};
`
    function getSteps() {
        return ['Choose your car', 'Add insurance', 'Order confirmation'];
    }
    const steps = getSteps();

    const getStepContent = step => {
        switch (step) {
            case 0:
                return 'Select campaign settings...';
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'Unknown step';
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
    return (
        <div style={{ display: 'flex', flex: 1 }}>

            <StyledContainer ismobile={isMobile.toString()}>

                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepButton onClick={handleStep(index)} completed={completed[index]}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
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
                                <Typography >{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button disabled={activeStep === 0} onClick={handleBack} >
                                        Back
              </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}

                                    >
                                        Next
              </Button>
                                    {activeStep !== steps.length &&
                                        (completed[activeStep] ? (
                                            <Typography variant="caption" >
                                                Step {activeStep + 1} already completed
                  </Typography>
                                        ) : (
                                                <Button variant="contained" color="primary" onClick={handleComplete}>
                                                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                                </Button>
                                            ))}
                                </div>
                            </div>
                        )}
                </div>






                <Grid container spacing={1} style={{ border: '1px solid' }}>

                    <Grid item lg={4} md={4} >
                        <LeftPane >
                            <Picker searchType='cars' />
                            <Divider />

                        </LeftPane>
                    </Grid>

                    <Grid item lg={8} md={7}>
                        <SearchResults />

                    </Grid>

                </Grid>
                {/* <Grid container style={{ border: '1px solid', maxWidth: '780px' }}>
                </Grid> */}
            </StyledContainer >
        </div>

    )
}

export default Order
