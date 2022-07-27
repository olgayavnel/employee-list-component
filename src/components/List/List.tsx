import React, { FormEvent, SyntheticEvent } from 'react';
import {
  Button,
  Employee,
  EmployeeHobbies,
  EmployeeProfession,
  Form,
  Input,
  Label,
  ListContainer,
  Wrapper,
  Paragraph,
  ContentContainer,
  EmployeeName,
  EmployeeHeader,
  EmployeeDescription,
  EmployeeWrapper,
} from './List.styles';

type ListProps = {
  employeeList: {
    id: string;
    name: string;
    profession: string;
    hobbies: string;
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
      <ListContainer>
        {(employeeList || []).map((employee) => (
          <Employee key={employee?.id}>
            <EmployeeWrapper>
              <img src={employee?.image} alt='employee_image' />
              {/* --> overlay */}
              <ContentContainer>
                {/* --> employee header */}
                <EmployeeHeader>
                  <EmployeeName>{employee?.name}</EmployeeName>
                </EmployeeHeader>
                {/* --> employee description */}
                <EmployeeDescription>
                  <EmployeeProfession>
                    {employee?.profession}
                  </EmployeeProfession>
                  <EmployeeHobbies>{employee?.hobbies}</EmployeeHobbies>
                </EmployeeDescription>
                {/* --> button */}
                <Button
                  type='button'
                  onClick={() => handleRemoveClick(employee?.id)}
                >
                  Remove employee
                </Button>
              </ContentContainer>
            </EmployeeWrapper>
          </Employee>
        ))}
      </ListContainer>

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
        <Button type='submit'>Add employee</Button>
      </Form>
    </Wrapper>
  );
};
