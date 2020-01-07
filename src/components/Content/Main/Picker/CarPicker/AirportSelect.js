import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'

const airports = [
    'Ben Gurion Airport',
    'Haifa Airport',
    'Ramon Airport'
]
const AirportSelect = ({isPickupDate, handleAirportSelected}) => {
    return (
        <TextField
            id="airport-selection"
            select
            label={isPickupDate?"Pick-up location": "Drop-off location"}
            value={airports[0]}
            onChange={handleAirportSelected}
            style={{ width: '100%' }}
        >
            {airports.map((airport, idx) => (
                <MenuItem key={idx} value={airport}>
                    {airport}
                </MenuItem>
            ))}
        </TextField>

    )
}

export default AirportSelect
