import React from 'react';
import {number} from "prop-types";
import {Container, Stepper, Step, StepLabel, Grid, Card} from "@material-ui/core";

interface StepWrapperProps {
    activeStep: number;
}

const steps = ['Track info', 'Download wrap', 'Download track']
const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step
                        key={index}
                        completed={activeStep > index}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container  style={{justifyContent:'center',margin: '70px 0', height: 270}}>
                <Card style={{width: 600}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;
