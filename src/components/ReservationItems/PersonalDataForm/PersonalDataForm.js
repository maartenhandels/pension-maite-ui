import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import classes from "./PersonalDataForm.module.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import Card from "../../UI/Card/Card";
import FormInput from "../../UI/FormElements/FormInput/FormInput";
import TextArea from "../../UI/FormElements/TextArea/TexArea";
import CheckBox from "../../UI/FormElements/CheckBox/CheckBox";
import Button from "../../UI/Button/Button";
import { validateEmail } from "../../../utilities/stringUtitilities";

const PersonalDataForm = ({ className, onFormSubmit }) => {
  const { t } = useTranslation(null, {
    keyPrefix: "reservationPage.step2.form",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isAdult, setIsAdult] = useState(false);
  const [touched, setTouched] = useState(false);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const isAdultRef = useRef(null);

  const submitFormHandler = (e) => {
    e.preventDefault();
    setTouched(true);

    if (validateForm()) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        comment: comment,
        isAdult: isAdult,
      };
      onFormSubmit(formData);
    }
  };

  const validateForm = () => {
    if (!firstName || firstName.length === 0) {
      firstNameRef.current.scrollIntoView();
      return false;
    }
    if (!lastName || lastName.length === 0) {
      lastNameRef.current.scrollIntoView();
      return false;
    }
    if (!email || !validateEmail(email)) {
      emailRef.current.scrollIntoView();
      return false;
    }
    if (!phone || phone.length != 9) {
      phoneRef.current.scrollIntoView();
      return false;
    }
    if (!isAdult) {
      isAdultRef.current.scrollIntoView();
      return false;
    }
    return true;
  };

  return (
    <Card className={className}>
      <form className={classes.PersonalDataForm} onSubmit={submitFormHandler}>
        <FormInput
          refProp={firstNameRef}
          name="firstName"
          type="text"
          label={t("firstNameLabel")}
          value={firstName}
          onChangeHandler={setFirstName}
          required={true}
          isNotValid={touched && !firstName.length > 0}
        />
        <FormInput
          refProp={lastNameRef}
          name="lastName"
          type="text"
          label={t("lastNameLabel")}
          value={lastName}
          onChangeHandler={setLastName}
          required={true}
          isNotValid={touched && !lastName.length > 0}
        />
        <FormInput
          refProp={emailRef}
          name="email"
          type="email"
          label={t("emailLabel")}
          value={email}
          onChangeHandler={setEmail}
          required={true}
          icon={faEnvelope}
          isNotValid={touched && !validateEmail(email)}
        />
        <FormInput
          refProp={phoneRef}
          name="phone"
          label={t("phoneLabel")}
          value={phone}
          onChangeHandler={setPhone}
          required={true}
          icon={faPhone}
          isNotValid={touched && phone.length != 9}
        />
        <TextArea
          name="comment"
          label={t("commentLabel")}
          value={comment}
          onChangeHandler={setComment}
        />
        <CheckBox
          refProp={isAdultRef}
          name="adult"
          label={t("adultLabel")}
          value={isAdult}
          onChangeHandler={setIsAdult}
          error={touched && !isAdult}
        />
        <Button className={classes.FormBtn}>{t("btnLabel")}</Button>
      </form>
    </Card>
  );
};

export default PersonalDataForm;
