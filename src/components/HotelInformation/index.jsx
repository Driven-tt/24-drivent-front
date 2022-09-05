import { Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import styled from 'styled-components';
import usePayment from '../../hooks/api/usePayment';
import UnauthorizedAccessMessage from '../UnauthorizedAccessMessage';
import HotelSelection from './HotelSelection';
import useReservation from '../../hooks/api/useReservation';

export default function HotelInformation() {
  const { paymentData } = usePayment();
  const { reservationData } = useReservation();
  
  const unauthorizedMessage = 
    !reservationData?.reservation.withAccommodation && paymentData ? 
      'Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades'
      : 
      'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem'; 
  
  const content = 
    paymentData && reservationData?.reservation.withAccommodation ? 
      <HotelSelection /> 
      : 
      <UnauthorizedAccessMessage text={unauthorizedMessage}/>;

  return (
    <>
      <Title variant="h4">Escolha de Hotel e quarto</Title>
      <MuiPickersUtilsProvider utils={DateFnsUtils}></MuiPickersUtilsProvider>
      { content }
    </>
  );
}

const Title = styled(Typography)`
    margin-bottom: 20px !important;
`;
