import React, { useState } from 'react'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';

const CarDatePicker = ({ isPickupDate, handleDateAndTime }) => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <Grid  item sm={8}>
          <DatePicker
            value={isPickupDate? selectedDate:selectedDate.setDate(selectedDate.getDate()+3)}
            format="dd/MM/yyyy"
            label={isPickupDate ? "Pick-up date" : "Drop-off date"}
            onChange={handleDateChange}
          />

      </Grid>
      <Grid  item sm={4}>
        <TimePicker
        label="Time"
          clearable
          ampm={false}
          value={selectedDate.setTime(1578301200)}
          onChange={handleDateChange}
        />

      </Grid>
      </MuiPickersUtilsProvider>
  );
}

export default CarDatePicker
