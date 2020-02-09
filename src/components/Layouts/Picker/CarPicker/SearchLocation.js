import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'

const airports = [
    'Ben Gurion Airport',
    'Haifa Airport',
    'Ramon Airport'
]

const SearchLocation = ({ isPickupDate, handleLocationSelected, location }) => {
   
    return (
        <TextField
            id="airport-selection"
            select
            label={isPickupDate ? "Pick-up location" : "Drop-off location"}
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
