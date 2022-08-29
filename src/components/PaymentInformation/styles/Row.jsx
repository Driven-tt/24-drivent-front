import styled from 'styled-components';

export const Row = styled.form`
  height: 50px;
  display: flex;
  justify-content: space-between;

  input {
    padding-left: 10px;
    width: 60%;
    font-size: large;
  }

  input:last-child {
    width: 30%;
  }
`;
