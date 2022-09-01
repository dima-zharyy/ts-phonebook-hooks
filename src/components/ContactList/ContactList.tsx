import React from "react";
import { ContactListItem } from "components";
import { IContactsState } from "hooks/useLocalStorage";

interface IListProps {
  contacts: IContactsState;
  onClick: (id: string) => void;
}

export const ContactList: React.FC<IListProps> = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onClick={() => onClick(id)}
          />
        );
      })}
    </ul>
  );
};
