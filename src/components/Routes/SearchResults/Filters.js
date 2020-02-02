import React, { useState } from 'react'
import { Paper, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, FormControlLabel, Checkbox, ListItem } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect } from 'react';
import styled from 'styled-components';
const CheckboxArea = styled(ExpansionPanelDetails)`
    display: flex;
    flex-direction: column;
`
const Filters = ({ cars,
    filteredCars: { filteredCars, setFilteredCars },
    gearboxChecked: { gearBoxChecked, setGearBoxChecked },
    suppliers: { suppliersList, setSuppliersList },
    mileage: { MileageChecked, setMileageChecked }
}) => {

    useEffect(() => {

    }, [])

    const removeSupplier = (supplier) => {
        const arrayOfcarsBySupplier = filteredCars.filter(car => car.supplier !== supplier)
        setFilteredCars(arrayOfcarsBySupplier);
        if (filteredCars.length === 0) setFilteredCars(cars)
    }

    const handleFilter = (label, idx, checked) => event => {
        const value = event.target.value

        switch (value) {
            case 'typeOfGearBox': setFilteredCars(cars.filter(car => car.typeOfGearBox === label)); setGearBoxChecked({ ...gearBoxChecked, [label]: event.target.checked }); break;
            case 'mileage': setFilteredCars(cars.filter(car => car.mileage === label)); setMileageChecked({ ...MileageChecked, [label]: event.target.checked }); break;
            case 'supplier':
                const array = suppliersList;
                array[idx] = { supplier: label, checked: event.target.checked };

                checked ? removeSupplier(label) : setFilteredCars(filteredCars.concat(cars.filter(car => car.supplier === label)))

                setSuppliersList(array);
                break;
            default: console.log('unknown label'); break;
        }
    }



    const CheckBoxFilter = ({ label, type, checked, idx }) => {

        return <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleFilter(label, idx, checked)}
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
                        // console.log(item.checked);
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
                    <CheckBoxFilter label='Automatic' type='typeOfGearBox' checked={gearBoxChecked.Automatic} />
                    {/* <CheckBoxFilter label='Manual' type='typeOfGearBox' checked={gearBoxChecked.Manual} /> */}
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={gearBoxChecked.Manual}
                                onChange={handleFilter('Manual')}
                                value='typeOfGearBox'
                                color="primary"
                            />
                        }
                        label={'Manual'}
                    />
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
                    <CheckBoxFilter label='Unlimited' type='mileage' checked={MileageChecked.Unlimited} />
                    <CheckBoxFilter label='Limited' type='mileage' checked={MileageChecked.Limited} />
                </CheckboxArea>
            </ExpansionPanel>


        </Paper>
    )
}

export default Filters
