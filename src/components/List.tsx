import React, { FormEvent, SyntheticEvent } from 'react';

type ListProps = {
  employeeList: {
    id: string;
    firstName: string;
    lastName: string;
    profession: string;
    hobbies: string;
  }[];
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
  handleSubmit: (event: SyntheticEvent) => void;
  handleRemoveClick: (id: string) => void;
  employee: {
    id: string;
    firstName: string;
    lastName: string;
    profession: string;
    hobbies: string;
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
    <div>
      <ul>
        {(employeeList || []).map((employee) => (
          <li key={employee?.id}>
            <>
              <div>{employee?.firstName}</div>
              <div>{employee?.lastName}</div>
              <div>{employee?.profession}</div>
              <div>{employee?.hobbies}</div>

              <button
                type='button'
                onClick={() => handleRemoveClick(employee?.id)}
              >
                Remove employee
              </button>
            </>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor=''>
          <p>First name: </p>
          <input
            type='string'
            name='firstName'
            value={employee.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor=''>
          <p>Last name: </p>
          <input
            type='string'
            name='lastName'
            value={employee.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor=''>
          <p>Profession: </p>
          <input
            type='string'
            name='profession'
            value={employee.profession}
            onChange={handleChange}
          />
        </label>
        <label htmlFor=''>
          <p>Hobbies: </p>
          <input
            type='string'
            name='hobbies'
            value={employee.hobbies}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Add Employee</button>
      </form>
    </div>
  );
};
