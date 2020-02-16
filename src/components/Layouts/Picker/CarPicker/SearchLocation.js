import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'
import { useTranslation } from 'react-i18next';
const airports = [
    'Ben Gurion Airport',
    'Haifa Airport',
    'Ramon Airport'
]

const SearchLocation = ({ isPickupDate, handleLocationSelected, location }) => {
   const {t}=useTranslation();
    return (
        <TextField
            id="airport-selection"
            select
            label={isPickupDate ? t('picker.carpicker.pickUpLocation') : t('picker.carpicker.dropOffLocation')}
            value={location}
            defaultValue={location}
            onChange={event => handleLocationSelected(event.target.value, isPickupDate)}
            style={{ width: '100%' }}
        >
            {airports.map((airport, idx) => (
                <MenuItem
                    key={idx}
                    value={airport}
                >
                    {airport}
                </MenuItem>
            ))}
        </TextField>

    )
}

export default SearchLocation
