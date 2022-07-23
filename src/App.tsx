import React, { FormEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import { SimpleList } from './components/List';

const employees = [
  {
    id: '1',
    firstName: 'Anna',
    lastName: 'Moose',
    profession: 'Software Developer',
    hobbies: 'Coding, creating content for YouTube, traveling',
  },
  {
    id: '2',
    firstName: 'Alice',
    lastName: 'Brooks',
    profession: 'UX/UI Designer',
    hobbies: 'Drawing, babysitting dogs',
  },
];

const initialEmployeeValues = {
  id: '',
  firstName: '',
  lastName: '',
  profession: '',
  hobbies: '',
};

function App() {
  const [employee, setEmployee] = useState(initialEmployeeValues);
  const [employeeList, setEmployeeList] = useState(employees);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    if (employee) {
      setEmployeeList((employees) => [...employees, employee]);
    }

    setEmployee(initialEmployeeValues);
    event?.preventDefault();
  };

  const handleRemoveClick = (id: string) => {
    setEmployeeList(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className='App'>
      <SimpleList
        employeeList={employeeList}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleRemoveClick={handleRemoveClick}
        employee={employee}
      />
    </div>
  );
}

export default App;
