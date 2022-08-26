import styled from 'styled-components';
import PresentialTicketOption from './PresentialTicketOption';
import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { PaymentContext } from '../../contexts/PaymentContext';

export default function PresentialTicketOptions() {
  const { ticketModality } = useContext(PaymentContext);

  if(ticketModality !== 'presential') return null;

  return (
    <Options>
      <Subtitle variant="h5">Otimo! Agora escolha sua modalidade de hospedagem</Subtitle>
      <div>
        <PresentialTicketOption id="withHotel" title="Sem Hotel" price="0"/>
        <PresentialTicketOption id="withoutHotel" title="Com Hotel" price="350"/>
      </div>
    </Options>
  );
}

const Options = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  margin: 10px 0;

  & > div {
    margin-top: 20px;
    display: flex;
    column-gap: 20px;
  }
`;

const Subtitle = styled(Typography)`
  color: #8e8e8e;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;

`;
