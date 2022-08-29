import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function UnauthorizedAccessMessage({ text }) {
  return (
    <CenterText>
      <Text>{text}</Text>
    </CenterText>
  );
}

const Text = styled(Typography)`
  color: #8E8E8E;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  width: 330px;
  text-align: center;
`;
const CenterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 91px);
`;
