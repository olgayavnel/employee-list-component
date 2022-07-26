import { ListEmployee } from './ListEmployee';
import { SubmitForm } from './SubmitForm';
import { SimpleList, Wrapper } from './List.styles';
import { ListProps } from './types';

export const List = ({
  employeeList,
  handleChange,
  handleSubmit,
  handleRemoveClick,
  employee,
}: ListProps) => {
  return (
    <Wrapper>
      <SimpleList>
        {(employeeList || []).map((employee) => (
          <ListEmployee
            employee={employee}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </SimpleList>
      <SubmitForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        employee={employee}
      />
    </Wrapper>
  );
};
