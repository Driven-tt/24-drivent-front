import TicketOptions from './TicketOptions';
import PresentialTicketOptions from './PresentialTicketOptions';
import ReserveTicketButton from './ReserveTicketButton';

export default function TicketSelection() {
  return (
    <>
      <TicketOptions />
      <PresentialTicketOptions />
      <ReserveTicketButton />
    </>
  );
}
