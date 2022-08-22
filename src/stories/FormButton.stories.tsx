import { ComponentMeta, Story } from '@storybook/react';

import { FormAddButton } from '../components/List/FormButton';
import { FormAddButtonProps } from '../components/List/types';

// default export describes the component
export default {
  title: 'FormAddButton',
  component: FormAddButton,
  argTypes: {
    onClick: { action: 'submitted' },
    children: {
      defaultValue: 'Default Text',
    },
  },
} as ComponentMeta<typeof FormAddButton>;

const Template: Story<FormAddButtonProps> = (args) => (
  <FormAddButton {...args} />
);
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Submit',
};
Secondary.args = {
  variant: 'secondary',
  children: 'Click me',
};
Tertiary.args = {
  variant: 'tertiary',
  children: 'Submit a new employee',
};
