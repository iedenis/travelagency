import React, { useState } from 'react'
import { Paper, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, FormControlLabel, Checkbox, ListItem } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect } from 'react';
import styled from 'styled-components';
const CheckboxArea = styled(ExpansionPanelDetails)`
    display: flex;
    flex-direction: column;
`
const Filters = ({ cars, carsToDisplay: { filteredCars, setFilteredCars } }) => {
    const [state, setState] = useState({
        carClasses: [],
        numberOfSeats: [],
        numberOfLargeBags: [],
        numberOfSmallBags: [],
        numberOfDoors: [],
        typeOfGearBox: { Manual: false, Automatic: false },

    })
    const [suppliersList, setSuppliersList] = useState(
        cars.map(car => {
            return { supplier: car.supplier, checked: false }
        })
    )
    const handleFilter = (label, idx) => event => {
        const value = event.target.value
        switch (value) {
            case 'typeOfGearBox': setFilteredCars(cars.filter(car => car.typeOfGearBox === label)); break;
            case 'mileage': setFilteredCars(cars.filter(car => car.mileage === label)); break;
            case 'supplier':
                const array = suppliersList;
                array[idx] = { supplier: label, checked: true }
                console.log(array)
                console.log(suppliersList);
                setSuppliersList(array);
                break;
            default: console.log('unknown label'); break;
        }
        //const carsToDisplay = cars.filter((car) => car.supplier === label)
        //setFilteredCars(carsToDisplay)
    }



    const CheckBoxFilter = ({ label, type, checked, idx }) => {

        return <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleFilter(label, idx)}
                    value={type}
                    color="primary"
                />
            }
            label={label}
        />
    }
    return (
        <Paper style={{ height: '100%' }}>
            <ExpansionPanel defaultExpanded>

                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography >Filter by supplier</Typography>
                </ExpansionPanelSummary>
                <CheckboxArea style={{ display: 'flex', flexDirection: 'column' }}>

                    {suppliersList.map((item, idx) => {
                        console.log(item.checked);
                        return <CheckBoxFilter idx={idx} key={idx} label={item.supplier} type='supplier' checked={item.checked} />
                    })}
                </CheckboxArea>
            </ExpansionPanel>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography >Type of gearbox</Typography>
                </ExpansionPanelSummary>
                <CheckboxArea>
                    <CheckBoxFilter label='Automatic' type='typeOfGearBox' />
                    <CheckBoxFilter label='Manual' type='typeOfGearBox' />

                </CheckboxArea>
            </ExpansionPanel>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography >Mileage/Kilometres</Typography>
                </ExpansionPanelSummary>
                <CheckboxArea>
                    <CheckBoxFilter label='Unlimited' type='mileage' />
                    <CheckBoxFilter label='Limited' type='mileage' />
                </CheckboxArea>
            </ExpansionPanel>


        </Paper>
    )
}

export default Filters
