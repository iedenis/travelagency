import React, { useState } from 'react'
import { Paper, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, FormControlLabel, Checkbox } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect } from 'react';

const Filters = ({ suppliers }) => {
    const [state, setState] = useState({
        suppliers: suppliers,
        carClass: '',
        numberOfSeats: 0,
        numberOfLargeBags: [],
        numberOfSmallBags: 0,
        numberOfDoors: 0,
        typeOfGearBox: ['Automatic', 'Manual']
    })
    const [suppliersList, setSuppliersList] = useState([])
    const [isChecked, setIsChecked] = useState({

    })
    useEffect(() => {
        setSuppliersList(suppliers)
        setIsChecked(suppliersList.map(supplier => { return { [supplier]: false } }))
        console.log(isChecked)
    }, [suppliers])
    useEffect(() => {
        console.log(isChecked);
    }, [isChecked])
    // let suppliers = []
    // let numberOfLargeBags = []
    // useEffect(() => {
    //     for (let i = 0; i < cars.length; i++) {
    //         if (!state.suppliers.includes(cars[i].supplier)) {
    //             const temp = state.suppliers.push(cars[i].supplier)
    //             setState(prevState => { return { ...prevState, temp } })
    //         }
    //         if (!state.numberOfLargeBags.includes(cars[i].numberOfLargeBags)) state.numberOfLargeBags.push(cars[i].numberOfLargeBags)

    //     }
    // }, [])

    // let filters = cars.map(car => { return { supplier: car.supplier, typeOfGearBox: car.typeOfGearBox } })
    const handleFilter = (label) => {
        console.log(label);
        // cars.filter()
    }
    const CheckBoxFilter = ({ label }) => {

        return <FormControlLabel
            control={
                <Checkbox
                    checked={isChecked[label]}
                    onChange={() => handleFilter(label)}
                    // value={label}
                    color="primary"
                />
            }
            label={label}
        />
    }
    return (
        <Paper style={{ height: '400px' }}>
            <ExpansionPanel defaultExpanded>

                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >Supplier</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                    {suppliersList.map(supplier => {
                        return <CheckBoxFilter key={supplier} label={supplier} />
                    })}
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography >Type of gearbox</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <CheckBoxFilter label='Automatic' />
                    <CheckBoxFilter label='Manual' />

                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography >Mileage/Kilometres</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <CheckBoxFilter label='Unlimeted' />
                    <CheckBoxFilter label='Limited' />
                </ExpansionPanelDetails>
            </ExpansionPanel>


        </Paper>
    )
}

export default Filters
