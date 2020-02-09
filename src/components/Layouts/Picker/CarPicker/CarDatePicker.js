import React, { useState, useEffect } from 'react'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';

const CarDatePicker = ({ setDates,
  isPickupDate,
  handleDateAndTime,
  date,
  setTempSearchDetails,
  handleTimeSelected,
  time }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);

  }
 
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <Grid item sm={8} xs={7}>
        <DatePicker
          autoOk
          value={date}
          format="dd/MM/yyyy"
          label={isPickupDate ? "Pick-up date" : "Drop-off date"}
          onChange={handleDateChange}
          disablePast={true}
        />

      </Grid>
      <Grid item sm={4} xs={5}>
        <TimePicker
          label="Time"
          // clearable
          ampm={false}
          value={time}
          onChange={time => handleTimeSelected(time.getTime(), isPickupDate)}
        />
      </Grid>

    </MuiPickersUtilsProvider>
  );
}

export default CarDatePicker
