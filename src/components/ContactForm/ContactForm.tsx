import React, { useState } from "react";
import {
  Form,
  InnerFormContainer,
  FormLabel,
  FormInput,
  Button,
} from "./ContactForm.styled";

import { nanoid } from "nanoid";

export type SubmitData = { name: string; number: string };

export type PropOnSubmit = {
  onSubmit: (data: SubmitData) => void;
};

export const ContactForm: React.FC<PropOnSubmit> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const inputNameId = nanoid(5);
  const inputNumberId = nanoid(5);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    onSubmit({ name, number });

    setName("");
    setNumber("");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InnerFormContainer>
        <FormLabel htmlFor={inputNameId}>Name</FormLabel>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={inputNameId}
          onChange={handleInputChange}
          value={name}
        />
      </InnerFormContainer>
      <InnerFormContainer>
        <FormLabel htmlFor={inputNumberId}>Number</FormLabel>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={inputNumberId}
          onChange={handleInputChange}
          value={number}
        />
      </InnerFormContainer>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
