import { AiTwotoneDelete } from 'react-icons/ai';
import {
  DeleteButton,
  Employee,
  EmployeeParagraph,
  EmployeeName,
  EmployeeBody,
  EmployeeTag,
} from './List.styles';
import { ListEmployeeProps } from './types';

export const ListEmployee = ({
  employee,
  handleRemoveClick,
}: ListEmployeeProps) => {
  return (
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
  );
};
