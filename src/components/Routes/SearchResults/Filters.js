import React, { useEffect } from 'react'
import { Paper, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, FormControlLabel, Checkbox, ListItem, useMediaQuery, useTheme, Grid } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

    const isPC = useMediaQuery(useTheme().breakpoints.up('md'));

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

    const MileagePanel = () => {
        return <ExpansionPanel defaultExpanded={isPC} style={{ marginTop: isPC ? '16px' : '0px' }}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography >{isPC ? 'Mileage/Kilometres' : 'Mileage'}</Typography>
            </ExpansionPanelSummary>
            <CheckboxArea>

                <CheckBoxFilter label='Unlimited' type='mileage' checked={MileageChecked.Unlimited} />
                <CheckBoxFilter label='Limited' type='mileage' checked={MileageChecked.Limited} />
            </CheckboxArea>
        </ExpansionPanel>

    }

    const GearBoxPanel = () => {
        return <ExpansionPanel defaultExpanded={isPC} style={{ marginTop: isPC? '16px': '0px' }}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography  >{isPC ? 'Type of gearbox' : 'Gearbox'}</Typography>
            </ExpansionPanelSummary>
            <CheckboxArea>
                <CheckBoxFilter label='Automatic' type='typeOfGearBox' checked={gearBoxChecked.Automatic} />
                <CheckBoxFilter label='Manual' type='typeOfGearBox' checked={gearBoxChecked.Manual} />

            </CheckboxArea>
        </ExpansionPanel>

    }

    const SuppliersPannel = () => {
        return <ExpansionPanel defaultExpanded={isPC} >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography > {isPC ? 'Filter by supplier' : 'Supplier'}</Typography>
            </ExpansionPanelSummary>
            <CheckboxArea style={{ display: 'flex', flexDirection: 'column' }}>

                {suppliersList.map((item, idx) => {
                    return <CheckBoxFilter idx={idx} key={idx} label={item.supplier} type='supplier' checked={item.checked} />
                })}
            </CheckboxArea>
        </ExpansionPanel>

    }
    return (
        <Paper style={{ height: '100%' }}>
            <Grid container >

                <Grid item lg={12} md={12} sm={4} xs={4} >
                    <SuppliersPannel />

                </Grid>
                <Grid item lg={12} md={12} sm={4} xs={4} >
                    <GearBoxPanel />

                </Grid>
                <Grid item lg={12} md={12} sm={4} xs={4}>
                    <MileagePanel />

                </Grid>

            </Grid>

        </Paper>
    )
}

export default Filters
