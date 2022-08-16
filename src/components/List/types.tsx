import { FormEvent, SyntheticEvent } from 'react';

export type ListProps = {
  employeeList: {
    id: string;
    name: string;
    profession: string;
    hobbies: string;
    tag: string;
    image: string;
  }[];
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
  handleSubmit: (event: SyntheticEvent) => void;
  handleRemoveClick: (id: string) => void;
  employee: {
    id: string;
    name: string;
    profession: string;
    hobbies: string;
    tag: string;
    image: string;
  };
};

export type SubmitFormProps = {
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
  handleSubmit: (event: SyntheticEvent) => void;
  employee: {
    id: string;
    name: string;
    profession: string;
    hobbies: string;
    tag: string;
    image: string;
  };
};

export type ListEmployeeProps = {
  handleRemoveClick: (id: string) => void;
  employee: {
    id: string;
    name: string;
    profession: string;
    hobbies: string;
    tag: string;
    image: string;
  };
};
