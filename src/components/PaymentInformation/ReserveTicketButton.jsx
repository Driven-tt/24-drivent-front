import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import styled from 'styled-components';
import { PaymentContext } from '../../contexts/PaymentContext';

export default function ReserveTicketButton() {
  const { ticketModality, accommodationModality, reserveTicket } = useContext(PaymentContext);

  if(ticketModality.type !== 'online' && accommodationModality.type === null) return null;

  const total = Number(ticketModality.price) + Number(accommodationModality.price);
  return (
    <Wrapper>
      <Subtitle variant="h5">Fechado! O total ficou em <strong>R$ {total}</strong>. Agora é só confirmar:</Subtitle>
      <Button onClick={() => reserveTicket()}>RESERVAR INGRESSO</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Subtitle = styled(Typography)`
  color: #8e8e8e;
  font-size: 20px !important;
  font-family: 'Roboto', sans-serif;
`;

const Button = styled.button`
  width: 162px;
  height: 37px;
  margin-top: 10px;
  background-color: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  color: #000;

  &:hover {
    cursor: pointer;
  }
`;
