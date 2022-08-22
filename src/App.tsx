import React, { FormEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import { List } from './components/List';
import { employees, initialEmployeeValues } from './data/dummyData';

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
