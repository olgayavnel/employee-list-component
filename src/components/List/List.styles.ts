import styled from 'styled-components';

export const Wrapper = styled.section`
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

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  width: 100%;
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
`;

export const Employee = styled.li``;

export const EmployeeWrapper = styled.div`
  /* position: relative; */
  /* display: block; */
  height: 100%;
  border-radius: calc(40 * 1px);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  text-decoration: none;
  /* box-sizing: border-box; */

  img {
    object-fit: cover;
    width: 100%;
    height: 300px;
  }
`;

export const ContentContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmployeeHeader = styled.div``;

export const EmployeeName = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 0.3rem;
  color: #6a515e;
`;

export const EmployeeDescription = styled.p`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmployeeProfession = styled.p``;

export const EmployeeHobbies = styled.p``;

export const Button = styled.button`
  cursor: pointer;
  width: 10vw;
  height: 2.5rem;

  background-color: #94742e;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(133, 107, 6, 0.2);
  color: #fff;
  font-size: 0.75rem;
  padding: 0.25rem;
  letter-spacing: 1px;
`;

export const Form = styled.form``;
export const Label = styled.label``;
export const Paragraph = styled.p``;
export const Input = styled.input``;
