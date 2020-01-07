import React, { useState } from 'react'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';

const CarDatePicker = ({ setDates, isPickupDate, handleDateAndTime }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    console.log(date)
    // setSelectedDate(date);
    // setDates({
      
    // })
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <Grid item sm={8}>
        <DatePicker
          value={isPickupDate ? selectedDate : selectedDate.setDate(selectedDate.getDate() + 3)}
          format="dd/MM/yyyy"
          label={isPickupDate ? "Pick-up date" : "Drop-off date"}
          onChange={handleDateChange}
        />

      </Grid>
      <Grid item sm={4}>
        <TimePicker
          label="Time"
          clearable
          ampm={false}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default CarDatePicker
