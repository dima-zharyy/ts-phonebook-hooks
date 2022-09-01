import { useState, useEffect } from "react";

export type IContactsState =
  | {
      id: string;
      name: string;
      number: string;
    }[]
  | [];

export const useLocalStorage = (
  key: string,
  defaultValue: IContactsState
): [IContactsState, React.Dispatch<React.SetStateAction<IContactsState>>] => {
  const [state, setState] = useState<IContactsState>(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    return typeof savedContacts === "string"
      ? JSON.parse(savedContacts)
      : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
