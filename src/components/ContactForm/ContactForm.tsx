import { useState } from 'react';
import {
  Form,
  InnerFormContainer,
  FormLabel,
  FormInput,
  Button,
} from './ContactForm.styled';

import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const inputNameId = nanoid(5);
  const inputNumberId = nanoid(5);

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
