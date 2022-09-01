import React from "react";
import { FilterLabel, FilterInput, FilterWrapper } from "./Filter.styled";
import { nanoid } from "nanoid";

export interface IFilterProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Filter: React.FC<IFilterProps> = ({ onChange, value }) => {
  const filterId = nanoid(5);
  return (
    <FilterWrapper>
      <FilterLabel htmlFor={filterId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={filterId}
        onChange={onChange}
        value={value}
      />
    </FilterWrapper>
  );
};
