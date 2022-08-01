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

  @media (max-width: 768px) {
    padding: 0;
    margin: 2rem;
    padding-bottom: 4rem;
  }
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

export const AddButton = styled.button`
  cursor: pointer;
  border: none;
  color: #44828f;
  background: #eeed94;
  font-family: AnythingMoment;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  line-height: 1.4;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
`;

// Form
export const Form = styled.form`
  font-size: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #44828f;
  color: #fdfdfd;
  width: 300px;
  padding: 2rem 4rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
`;

export const Label = styled.label``;
export const Paragraph = styled.p`
  letter-spacing: 0.1rem;
  line-height: 1.4;
`;
export const Input = styled.input`
  border-radius: 50px;
  border: none;
  padding: 0.3rem;
  &:focus {
    outline: none;
  }
`;
