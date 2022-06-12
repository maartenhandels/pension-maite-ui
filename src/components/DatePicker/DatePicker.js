import React, { useState } from "react";

import classes from "./DatePicker.module.css";

import Card from "../UI/Card/Card";
import FlexCenter from "../../containers/FlexCenter/FlexCenter";
import Button from "../UI/Button/Button";

import { formatDate } from "../../utilities/utilities";

const DatePicker = () => {
  const [entryDate, setEntryDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [minDepartureDate, setMinDepartureDate] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const entryDateChangeHandler = (event) => {
    setEntryDate(event.target.value);

    // Remove selected departureDate if selected entryDate is after that departureDate
    if (event.target.value >= departureDate) {
      setDepartureDate("");
      setBtnDisabled(true);
    } else {
      // Set button enabled if there is a value for both dates
      setBtnDisabled(!event.target.value || !departureDate);
    }
    // Set the minDepartureDate 1 day after selected entryDate
    let newMinDate = new Date(event.target.value);
    newMinDate.setDate(newMinDate.getDate() + 1);
    setMinDepartureDate(formatDate(newMinDate));
  };

  const departureDateChangeHandler = (event) => {
    setDepartureDate(event.target.value);

    console.log("Changed");

    // Remove selected entryDate if selected departureDate is before that entryDate
    if (event.target.value < entryDate) {
      setEntryDate("");
    }

    // Set button enabled if there is a value for both dates
    setBtnDisabled(!entryDate || !event.target.value);
  };

  return (
    <FlexCenter className={classes.Container}>
      <Card className={classes.Card}>
        <div className={classes.Form}>
          <div className={classes.FormField}>
            <label>FECHA ENTRADA</label>
            <input
              type="date"
              onChange={entryDateChangeHandler}
              value={entryDate}
            />
          </div>
          <div className={classes.FormField}>
            <label>FECHA SALIDA</label>
            <input
              type="date"
              value={departureDate}
              onChange={departureDateChangeHandler}
              min={minDepartureDate}
            />
          </div>
          <div className={`form-group col-md-4 `}>
            <Button
              type="submit"
              className={`${classes.SearchBtn}`}
              disabled={btnDisabled}
            >
              Ver Disponibilidad
            </Button>
          </div>
        </div>
      </Card>
    </FlexCenter>
  );
};

export default DatePicker;
