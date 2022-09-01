import { useState } from "react";
import { ContactForm, ContactList, Filter } from "components";
import { useLocalStorage } from "hooks/useLocalStorage";

import {
  AppContainer,
  AppTitle,
  AppSubTitle,
  ContactsWrapper,
} from "./App.styled";

import { nanoid } from "nanoid";

export const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  const onSubmit = (data) => {
    const isAlreadyInContacts = contacts.some(
      ({ name }) => name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    );

    if (isAlreadyInContacts) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    const id = nanoid(5);
    const newContact = { id, ...data };
    setContacts((state) => [...state, newContact]);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const handleClickDel = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <AppContainer>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm onSubmit={onSubmit} />

      <AppSubTitle>Contacts</AppSubTitle>
      <ContactsWrapper>
        <Filter onChange={handleFilterChange} value={filter} />
        {contacts.length > 0 ? (
          <ContactList contacts={filteredContacts} onClick={handleClickDel} />
        ) : (
          <p>Your contact book is empty</p>
        )}
      </ContactsWrapper>
    </AppContainer>
  );
};
