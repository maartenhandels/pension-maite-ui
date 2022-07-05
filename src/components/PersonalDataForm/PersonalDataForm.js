import React, { useState } from "react";

import classes from "./PersonalDataForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import Card from "../UI/Card/Card";
import FormInput from "../UI/FormElements/FormInput/FormInput";
import TextArea from "../UI/FormElements/TextArea/TexArea";
import CheckBox from "../UI/FormElements/CheckBox/CheckBox";
import Button from "../UI/Button/Button";

const PersonalDataForm = ({ className }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isAdult, setIsAdult] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={className}>
      <form className={classes.PersonalDataForm} onSubmit={onSubmitHandler}>
        <FormInput
          name="firstName"
          type="text"
          label="Primer Nombre:"
          value={firstName}
          onChangeHandler={setFirstName}
        />
        <FormInput
          name="lastName"
          type="text"
          label="Apellidos:"
          value={lastName}
          onChangeHandler={setLastName}
        />
        <FormInput
          name="email"
          label="Email:"
          value={email}
          onChangeHandler={setEmail}
          icon={faEnvelope}
        />
        <FormInput
          name="phone"
          label="Teléfono:"
          value={phone}
          onChangeHandler={setPhone}
          icon={faPhone}
        />
        <TextArea
          name="comment"
          label="Leave a Comment:"
          value={comment}
          onChangeHandler={setComment}
        />
        <CheckBox
          name="adult"
          label="Confirmo que tengo +18 años"
          value={isAdult}
          onChangeHandler={setIsAdult}
        />
        <Button className={classes.FormBtn}>Confirmar</Button>
      </form>
    </Card>
  );
};

export default PersonalDataForm;
