import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TicketOptions from './TicketOptions';
import PresentialTicketOptions from './PresentialTicketOptions';
import ReserveTicketButton from './ReserveTicketButton';

export default function PaymentInformation() {
  return (
    <>
      <Title variant="h4">Ingresso e Pagamento</Title>
      <MuiPickersUtilsProvider utils={DateFnsUtils}></MuiPickersUtilsProvider>
      <TicketOptions />
      <PresentialTicketOptions />
      <ReserveTicketButton />
    </>
  );
}

const Title = styled(Typography)`
  margin-bottom: 20px!important;
`;
