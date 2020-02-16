import React, { useState, useEffect } from 'react'
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next'
const CarDatePicker = ({ setDates,
  isPickupDate,
  date,
  setTempSearchDetails,
  handleTimeSelected,
  handleDateSelected,
  time }) => {

  const { t } = useTranslation();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <Grid item sm={8} xs={7}>
        <DatePicker
          autoOk
          value={date}
          format="dd/MM/yyyy"
          label={isPickupDate ? t('picker.carpicker.pickUpDate') : t('picker.carpicker.dropOffDate')}
          onChange={date => handleDateSelected(date, isPickupDate)}
          disablePast={true}
        />

      </Grid>
      <Grid item sm={4} xs={5}>
        <TimePicker
          label={t('picker.carpicker.time')}
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
