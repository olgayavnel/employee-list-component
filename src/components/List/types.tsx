import { FormEvent, SyntheticEvent } from 'react';
import { HTMLAttributes, ReactNode } from 'react';

export interface ListProps {
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
}

export interface SubmitFormProps {
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
}

export interface ListEmployeeProps {
  handleRemoveClick: (id: string) => void;
  employee: {
    id: string;
    name: string;
    profession: string;
    hobbies: string;
    tag: string;
    image: string;
  };
}

export interface FormAddButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary';
}
