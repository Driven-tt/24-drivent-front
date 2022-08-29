import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useContext } from 'react';
import { PaymentContext } from '../../contexts/PaymentContext';
import FinishPayment from './FinishPayment';
import TicketSelection from './TicketSelection';
import useEnrollment from '../../hooks/api/useEnrollment';
import UnauthorizedAccessMessage from '../UnauthorizedAccessMessage/index.jsx';

export default function PaymentInformation() {
  const { reservationData } = useContext(PaymentContext);
  const { enrollment } = useEnrollment();
  const content = reservationData ? <FinishPayment reservation={reservationData}/> : <TicketSelection />;
  const unauthorizedMessage = 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso';

  return (
    <>
      <Title variant="h4">Ingresso e Pagamento</Title>
      <MuiPickersUtilsProvider utils={DateFnsUtils}></MuiPickersUtilsProvider>
      {enrollment ? content : <UnauthorizedAccessMessage text={unauthorizedMessage}/>}
    </>
  );
}

const Title = styled(Typography)`
  margin-bottom: 20px !important;
`;

