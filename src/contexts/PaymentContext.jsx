import { createContext, useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';
import useReservation from '../hooks/api/useReservation';
import usePayment from '../hooks/api/usePayment';
import useSaveReservation from '../hooks/api/useSaveReservation';
import useSavePayment from '../hooks/api/useSavePayment';
import { toast } from 'react-toastify';

export const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const { userData } = useContext(UserContext);
  // states
  const [ticketModality, setTicketModality] = useState({ type: null, price: null });
  const [accommodationModality, setAccommodationModality] = useState({ type: null, price: null });
  const [cardInfos, setCardInfos] = useState({
    cardNumber: null,
    cardHolderName: null,
    cardExpiration: null,
    cardCv: null,
  });
  // stored values 
  const [paymentData, setPaymentData] = useState(null);
  const [reservationData, setReservationData] = useState(null);
  // api hooks
  const { getReservation } = useReservation();
  const { getPayment } = usePayment();
  const { saveReservationLoading, saveReservation } = useSaveReservation();
  const { savePaymentLoading, savePayment } = useSavePayment();
  
  useEffect(() => {
    getData();
  }, [userData]);

  async function getData() {
    try {
      const reservationResponse = await getReservation(userData.user.id);
      setReservationData(reservationResponse.reservation);
      const paymentResponse = await getPayment(userData.user.id);
      setPaymentData(paymentResponse.payment);
    } catch (err) {
      if(err.response.status !== 404) {
        toast('Erro enquanto buscava os dados do servidor !');
      }
    }
  }

  function selectModality(modality) {
    if (modality.type !== 'presential' && modality.type !== 'online') return;
    if (modality.type === 'online') setAccommodationModality({ type: null, price: null });
    setTicketModality(modality);
  }

  function selectAccommodationModality(modality) {
    if (modality.type !== 'withHotel' && modality.type !== 'withoutHotel') return;
    setAccommodationModality(modality);
  }

  async function reserveTicket() {
    const newReserve = {
      userId: Number(userData.user.id),
      modality: ticketModality.type,
      modalityPrice: Number(ticketModality.price),
      withAccommodation: accommodationModality.type === 'withHotel',
      accommodationPrice: Number(accommodationModality.price) || 0,
    };

    try {
      await saveReservation(newReserve);
      setReservationData(newReserve);
      toast('Reserva feita com sucesso !');
    } catch (err) {
      toast('Não foi possível reservar o ingresso !');
    }
  }

  async function processPayment() {
    const newPayment = {
      userId: Number(userData.user.id),
      total: Number(reservationData.modalityPrice) + Number(reservationData.accommodationPrice),
      ...cardInfos
    };
    delete newPayment.cardCv;

    try {
      await savePayment(newPayment);
      setPaymentData(newPayment);
      toast('Pagamento concluido !');
    } catch (err) {
      toast('Não foi possivel concluir o pagamento !');
    }
  }

  return (
    <PaymentContext.Provider
      value={{
        paymentData,
        setPaymentData,
        ticketModality,
        accommodationModality,
        cardInfos,
        loading: saveReservationLoading || savePaymentLoading,
        reservationData,
        selectModality,
        selectAccommodationModality,
        reserveTicket,
        processPayment,
        setCardInfos,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
