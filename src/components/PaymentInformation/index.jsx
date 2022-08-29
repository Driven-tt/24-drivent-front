import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TicketOptions from './TicketOptions';
import PresentialTicketOptions from './PresentialTicketOptions';
import ReserveTicketButton from './ReserveTicketButton';
import TicketInfo from './TicketInfo';
import CreditCardForms from './CraditCardForm';
import PaymentButton from './PaymentButtons';
import { PaymentContext } from '../../contexts/PaymentContext';
import { useContext } from 'react';

export default function PaymentInformation() {
  const { paymentData } = useContext(PaymentContext);
  if (!paymentData) {
    return (
      <>
        <Title variant="h4">Ingresso e Pagamento</Title>
        <MuiPickersUtilsProvider utils={DateFnsUtils}></MuiPickersUtilsProvider>
        <TicketOptions />
        <PresentialTicketOptions />
        <ReserveTicketButton />
      </>
    );
  } else {
    return (
      <>
        <Title variant="h4">Ingresso e Pagamento</Title>
        <MuiPickersUtilsProvider utils={DateFnsUtils}></MuiPickersUtilsProvider>
        <TicketInfo />
        <CreditCardForms />
        <PaymentButton />
      </>
    );
  }
}

const Title = styled(Typography)`
  margin-bottom: 20px !important;
`;
