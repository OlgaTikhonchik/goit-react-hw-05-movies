import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 800px;
  margin: 0 auto;
`;

export const FormMovies = styled.form`
  align-items: center;
  // margin-top: 20px;
`;

export const Input = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 6px;
  outline: none;
  font-size: 20px;
  padding-left: 10px;
  color: #803a3a;
  margin-right: 20px;
  border: 2px solid black;
`;
export const Button = styled.button`
  display: inline-block;
  width: 130px;
  height: 37px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border: 2px solid black;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  color: #803a3a;
`;
