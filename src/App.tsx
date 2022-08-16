import React, { FormEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import { List } from './components/List';

export const employees = [
  {
    id: '1',
    name: 'Anna Moose',
    profession: 'Software Developer',
    hobbies: 'Hobbies: coding, creating content for YouTube, traveling',
    tag: 'tech',
    image:
      'https://images.unsplash.com/photo-1658454153721-d47b47afc96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
  },
  {
    id: '2',
    name: 'Alice Brooks',
    profession: 'UX/UI Designer',
    hobbies: 'Hobbies: drawing, babysitting dogs',
    tag: 'Design',
    image:
      'https://images.unsplash.com/photo-1506784850319-305956726452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
  },
  {
    id: '3',
    name: 'Joshua Paks',
    profession: 'Product manager',
    hobbies: 'Hobbies: cycling, vlogging',
    tag: 'Product',
    image:
      'https://images.unsplash.com/photo-1658351984158-e9e63932d220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
  },
];

const initialEmployeeValues = {
  id: '',
  name: '',
  profession: '',
  hobbies: '',
  tag: 'Artist',
  image:
    'https://images.unsplash.com/photo-1658454153721-d47b47afc96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
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
    // add rest operator
    setEmployeeList(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className='App'>
      <List
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
