import { useContext } from 'react';
import styled from 'styled-components';
import { PaymentContext } from '../../contexts/PaymentContext';
import { Typography } from '@material-ui/core';

export default function TicketInfo() {
  const { paymentData } = useContext(PaymentContext);
  const price = parseInt(paymentData.modalityPrice) + parseInt(paymentData.accommodationModality);
  let title = 'Online';
  if (paymentData.modality === 'presential' && paymentData.accommodationModality === '0') {
    title = 'Presencial';
  }
  if (paymentData.modality === 'presential' && paymentData.accommodationModality !== '0') {
    title = 'Presencial + Com Hotel';
  }

  return (
    <Box>
      <Subtitle variant="h5">Ingresso escolhido</Subtitle>
      <TicketInfoDiv>
        <span>{title}</span>
        <span>R$ {price}</span>
      </TicketInfoDiv>
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

const TicketInfoDiv = styled.div`
  width: 290px;
  height: 108px;
  border-radius: 20px;
  border: 1px solid #cecece;
  background-color: #ffeed2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;

  & > span:first-child {
    font-size: 16px;
    color: #454545;
  }

  & > span:last-child {
    font-size: 14px;
    color: #898989;
  }
`;

const Subtitle = styled(Typography)`
  color: #8e8e8e;
  font-size: 20px !important;
  font-family: 'Roboto', sans-serif;
`;
