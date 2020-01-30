import React from 'react'
import { Button } from '@material-ui/core'

const AddInsurance = ({ handleNext, handleBack }) => {
    return (
        <div>
            <Button onClick={handleBack} variant='contained' color='secondary'>Back</Button>

            <Button onClick={handleNext} variant='contained' color='secondary'>Next</Button>
        </div>
    )
}

export default AddInsurance
