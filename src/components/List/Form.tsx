import { FormAddButton } from './FormButton';
import { Form, Input, Label, Paragraph } from './List.styles';
import { SubmitFormProps } from './types';

export const SubmitForm = ({
  handleSubmit,
  handleChange,
  employee,
}: SubmitFormProps) => {
  return (
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
      <FormAddButton />
    </Form>
  );
};
