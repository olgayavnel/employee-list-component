import { AddButton } from './List.styles';
import { FormAddButtonProps } from './types';

export const FormAddButton = ({
  children,
  variant = 'primary',
  ...props
}: FormAddButtonProps) => {
  return (
    <AddButton
      {...props}
      style={{
        backgroundColor:
          variant === 'primary'
            ? '#eeed94'
            : variant === 'secondary'
            ? '#eeb894'
            : '#94eeb6',
      }}
      type='submit'
    >
      {children}
    </AddButton>
  );
};
