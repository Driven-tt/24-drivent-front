import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useContext } from 'react';
import { PaymentContext } from '../../contexts/PaymentContext';
import FinishPayment from './FinishPayment.jsx';
import TicketSelection from './TicketSelection';

export default function PaymentInformation() {
  const { reservationData } = useContext(PaymentContext);
  const content = reservationData ? <FinishPayment reservation={reservationData} /> : <TicketSelection />;

  return (
    <>
      <Title variant="h4">Ingresso e Pagamento</Title>
      <MuiPickersUtilsProvider utils={DateFnsUtils}></MuiPickersUtilsProvider>
      {content}
    </>
  );
}

const Title = styled(Typography)`
  margin-bottom: 20px !important;
`;
