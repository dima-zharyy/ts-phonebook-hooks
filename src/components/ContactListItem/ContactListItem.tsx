import React from "react";

import {
  ContactItem,
  ContactTextWrapper,
  ContactName,
  Button,
} from "./ContactListItem.styled";

type ClickHandler = React.MouseEventHandler<HTMLButtonElement>;

export interface IItemProps {
  onClick: ClickHandler;
  name: string;
  number: string;
}

export const ContactListItem: React.FC<IItemProps> = ({
  name,
  number,
  onClick,
}) => {
  return (
    <ContactItem>
      <ContactTextWrapper>
        <ContactName>{name}:</ContactName> <span>{number}</span>
      </ContactTextWrapper>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </ContactItem>
  );
};
