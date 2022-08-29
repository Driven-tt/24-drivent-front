import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { AiFillCheckCircle } from 'react-icons/ai';
export default function PaymentConfirmation() {
  return (
    <Box>
      <Subtitle variant="h5">Pagamento</Subtitle>
      <PaymentConfirmed>
        <CheckBox />
        <Text>
          <p>Pagamento confirmado! </p>
          <p>Prossiga para escolha de hospedagem e atividades</p>
        </Text>
      </PaymentConfirmed>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 5px;
  font-family: 'Roboto', sans-serif;
  margin: 10px 0;
`;

const PaymentConfirmed = styled.div`
  display: flex;
  align-items: center;
`;

const Subtitle = styled(Typography)`
  color: #8e8e8e;
  font-size: 20px !important;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  size: 16px;
  font-weight: 400;
  color: #454545;

  p:first-child {
    font-weight: 700;
  }
`;

const CheckBox = styled(AiFillCheckCircle)`
  color: #36b853;
  font-size: 40px;
  margin-right: 10px;
`;
