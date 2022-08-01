import { FormEvent, SyntheticEvent } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import {
  DeleteButton,
  AddButton,
  Employee,
  EmployeeParagraph,
  Form,
  Input,
  Label,
  List,
  Wrapper,
  Paragraph,
  EmployeeName,
  EmployeeBody,
  EmployeeTag,
} from './List.styles';

type ListProps = {
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

export const SimpleList = ({
  employeeList,
  handleChange,
  handleSubmit,
  handleRemoveClick,
  employee,
}: ListProps) => {
  return (
    <Wrapper>
      <List>
        {(employeeList || []).map((employee) => (
          <Employee key={employee?.id}>
            <img src={employee?.image} alt='employee_image' />
            <EmployeeBody>
              <EmployeeTag>{employee?.tag}</EmployeeTag>
              <EmployeeName>{employee?.name}</EmployeeName>
              <EmployeeParagraph>{employee?.profession}</EmployeeParagraph>
              <EmployeeParagraph>{employee?.hobbies}</EmployeeParagraph>
            </EmployeeBody>
            <DeleteButton
              type='button'
              onClick={() => handleRemoveClick(employee?.id)}
            >
              <AiTwotoneDelete />
            </DeleteButton>
          </Employee>
        ))}
      </List>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor=''>
          <Paragraph>Full name: </Paragraph>
          <Input
            type='string'
            name='name'
            value={employee.name}
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor=''>
          <Paragraph>Profession: </Paragraph>
          <Input
            type='string'
            name='profession'
            value={employee.profession}
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor=''>
          <Paragraph>Hobbies: </Paragraph>
          <Input
            type='string'
            name='hobbies'
            value={employee.hobbies}
            onChange={handleChange}
          />
        </Label>
        <AddButton type='submit'>Add employee</AddButton>
      </Form>
    </Wrapper>
  );
};
