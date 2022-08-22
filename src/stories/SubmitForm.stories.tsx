import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SubmitForm } from '../components/List/SubmitForm';

// default export describes the component
export default {
  title: 'SubmitForm',
  component: SubmitForm,
  args: {
    employee: {
      id: '1',
      name: 'Anna',
      profession: 'Writer',
      hobbies: 'Drawing',
      tag: 'Artist',
      image: '',
    },
  },
} as ComponentMeta<typeof SubmitForm>;

const Template: ComponentStory<typeof SubmitForm> = (args) => (
  <SubmitForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  handleSubmit: () => alert('Form submitted'),
  handleChange: () => {},
};

// named export described the stories
// export const Primary: ComponentStory<typeof SubmitForm> = () => {
//   const [employee, setEmployee] = useState(initialEmployeeValues);
//   const [employeeList, setEmployeeList] = useState(employees);

//   return (
//     <SubmitForm
//       handleSubmit={(e) => console.log(e)}
//       handleChange={(e) => console.log(e)}
//       employee={employee}
//     />
//   );
// };
