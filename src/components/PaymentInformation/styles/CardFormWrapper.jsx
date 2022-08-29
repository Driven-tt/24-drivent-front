import styled from 'styled-components';

export const CardFormWrapper = styled.form`
  display: flex;
  margin-left: 30px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  > input {
    height: 50px;
    padding-left: 10px;
    font-size: large;
  }

  @media (max-width: 600px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
  }
`;
