import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function FinishPayment({ reservation }) {
  const modality = reservation === 'online' ? 'Online' : 'Presencial';
  const accommodation = reservation.withAccommodation ? '+ Com Hotel' : null;
  const total = Number(reservation.modalityPrice) + Number(reservation.accommodationPrice);

  return (
    <>
      <Title variant='h5'>Ingresso escolhido</Title>
      <TicketInfo>
        <span>{modality} {accommodation}</span>
        <span>R$ {total}</span>
      </TicketInfo>
    </>
  );
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
    background-color: #FFEED2;

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
