import styled from 'styled-components';

export const Wrapper = styled.section`
  font-family: AnythingMoment;
  letter-spacing: 0.1rem;
  line-height: 1.4;
  background: papayawhip;
  margin: 4rem;
  padding: 4rem;
  border-radius: 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;
`;

// List
export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
`;

export const Employee = styled.li`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background-color: #f9feff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  img {
    object-fit: cover;
    width: 100%;
    height: 300px;
  }
`;

export const EmployeeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  min-height: 250px;
`;

export const EmployeeTag = styled.span`
  border-radius: 3rem;
  font-size: 0.8rem;
  margin: 0;
  background-color: #13382f;
  color: #f9feff;
  padding: 0.5rem 0.7rem;
  text-transform: uppercase;
`;

export const EmployeeName = styled.h3`
  font-size: 2.8rem;
  color: #354a21;
`;

export const EmployeeParagraph = styled.p`
  font-size: 1.6rem;
  color: #234f1e;
`;

export const DeleteButton = styled.button`
  align-self: end;
  cursor: pointer;
  color: #354a21;
  font-size: 1.2rem;
  border: 0;
  background: none;
  margin: 1rem;
`;

export const Button = styled.button``;

// Form
export const Form = styled.form``;
export const Label = styled.label``;
export const Paragraph = styled.p``;
export const Input = styled.input``;
