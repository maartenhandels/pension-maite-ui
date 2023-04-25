import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import classes from "./DatePicker.module.css";

import Card from "../UI/Card/Card";
import FlexCenter from "../../containers/FlexCenter/FlexCenter";
import Button from "../UI/Button/Button";

import { formatDate } from "../../utilities/dateUtilities";
import DateInput from "../UI/FormElements/DateInput/DateInput";

const DatePicker = ({
  checkinDate = "",
  checkoutDate = "",
  onSubmitHandler,
  className,
}) => {
  const [entryDate, setEntryDate] = useState(checkinDate);
  const [departureDate, setDepartureDate] = useState(checkoutDate);
  const [minDepartureDate, setMinDepartureDate] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const { t } = useTranslation(null, { keyPrefix: "datePicker" });

  useEffect(() => {
    setBtnDisabled(!entryDate || !departureDate);
  }, []);

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

    // Remove selected entryDate if selected departureDate is before that entryDate
    if (event.target.value < entryDate) {
      setEntryDate("");
    }

    // Set button enabled if there is a value for both dates
    setBtnDisabled(!entryDate || !event.target.value);
  };

  return (
    <FlexCenter className={`${classes.DatePicker} ${className}`}>
      <Card className={classes.Card}>
        <DateInput
          label={t("entryDateLabel").toUpperCase()}
          value={entryDate}
          onChangeHandler={entryDateChangeHandler}
          className={classes.DateInput}
        />
        <DateInput
          name="departureDate"
          label={t("departureDateLabel").toUpperCase()}
          value={departureDate}
          onChangeHandler={departureDateChangeHandler}
          minDate={minDepartureDate}
          className={classes.DateInput}
        />
        <Button
          type="submit"
          className={`${classes.SearchBtn}`}
          disabled={btnDisabled}
          onClick={() => onSubmitHandler(entryDate, departureDate)}
        >
          {t("btnText")}
        </Button>
      </Card>
    </FlexCenter>
  );
};

export default DatePicker;
