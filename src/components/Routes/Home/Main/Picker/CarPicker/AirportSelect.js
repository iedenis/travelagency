import React, { useState } from 'react'
import { TextField, MenuItem } from '@material-ui/core'

const airports = [
    'Ben Gurion Airport',
    'Haifa Airport',
    'Ramon Airport'
]

const AirportSelect = ({ isPickupDate, handleAirportSelected }) => {
    const [selectedAirport, setSelectedAirport] = useState(airports[0]);
    const handleSelection = (event) => {
        setSelectedAirport(event.target.value)
    }
    return (
        <TextField
            id="airport-selection"
            select
            label={isPickupDate ? "Pick-up location" : "Drop-off location"}
            value={selectedAirport}
            onChange={handleSelection}
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
