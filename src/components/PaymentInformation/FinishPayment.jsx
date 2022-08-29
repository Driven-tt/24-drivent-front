import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import styled from 'styled-components';
import { PaymentContext } from '../../contexts/PaymentContext';
import CreditCardForms from './CraditCardForm';
import PaymentButton from './PaymentButtons';
import PaymentConfirmation from './PaymentConfirmation';

export default function FinishPayment({ reservation }) {
  const { paymentConfirm } = useContext(PaymentContext);
  const modality = reservation === 'online' ? 'Online' : 'Presencial';
  const accommodation = reservation.withAccommodation ? '+ Com Hotel' : null;
  const total = Number(reservation.modalityPrice) + Number(reservation.accommodationPrice);

  const content = paymentConfirm ? (
    <>
      <Title variant="h5">Ingresso escolhido</Title>
      <TicketInfo>
        <span>
          {modality} {accommodation}
        </span>
        <span>R$ {total}</span>
      </TicketInfo>
      <PaymentConfirmation />
    </>
  ) : (
    <>
      <Title variant="h5">Ingresso escolhido</Title>
      <TicketInfo>
        <span>
          {modality} {accommodation}
        </span>
        <span>R$ {total}</span>
      </TicketInfo>
      <CreditCardForms />
      <PaymentButton />
    </>
  );

  return <>{content}</>;
}

const Title = styled(Typography)`
  font-size: 20px;
  color: #8e8e8e;
  margin-bottom: 10px !important;
`;

const TicketInfo = styled.div`
  width: 290px;
  height: 108px;
  border-radius: 20px;
  margin: 20px 0px;
  background-color: #ffeed2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;

  font-family: 'Roboto', sans-serif;

  & > span:first-child {
    color: #454545;
    font-size: 16px;
  }

  & > span:last-child {
    color: #898989;
    font-size: 14px;
  }
`;
