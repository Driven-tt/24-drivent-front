import { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import UserContext from './UserContext';
import useSaveReservation from '../hooks/api/useSaveReservation';
import { toast } from 'react-toastify';
import useGetReservation from '../hooks/api/useGetReservation.js';

export const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const { userData } = useContext(UserContext);
  // states
  const [ticketModality, setTicketModality] = useState({ type: null, price: null });
  const [accommodationModality, setAccommodationModality] = useState({ type: null, price: null });
  // stored values 
  const [paymentData, setPaymentData] = useLocalStorage('paymentData', null);
  const [reservationData, setReservationData] = useLocalStorage('reservationData', null);
  // api hooks
  const { saveReservationLoading, saveReservation } = useSaveReservation();
  const { getReservation } = useGetReservation();

  useEffect(() => {
    getReservationData();
  }, []);

  async function getReservationData() {
    try {
      const response = await getReservation(userData.user.id);
      if(!response.reservation) return;

      setReservationData(response.reservation);
    } catch (err) {
      console.log(err);
    }
  }

  function selectModality(modality) {
    if(modality.type !== 'presential' && modality.type !== 'online') return;
    if(modality.type === 'online') setAccommodationModality({ type: null, price: null });
    setTicketModality(modality);
  }

  function selectAccommodationModality(modality) {
    if(modality.type !== 'withHotel' && modality.type !== 'withoutHotel') return;
    setAccommodationModality(modality);
  }

  async function reserveTicket() {
    const newReserve = {
      userId: Number(userData.user.id),
      modality: ticketModality.type,
      modalityPrice: Number(ticketModality.price),
      withAccommodation: accommodationModality.type === 'withHotel',
      accommodationPrice: Number(accommodationModality.price) || 0
    };

    try {
      await saveReservation(newReserve);
      setReservationData(newReserve);
      toast('Reserva feita com sucesso !');
    } catch (err) {
      toast('Não foi possível reservar o ingresso !');
    }
  }

  return (
    <PaymentContext.Provider 
      value={{ 
        paymentData, 
        setPaymentData, 
        ticketModality, 
        accommodationModality,
        loading: saveReservationLoading,
        reservationData,
        selectModality, 
        selectAccommodationModality,
        reserveTicket
      }}>
      {children}
    </PaymentContext.Provider>
  );
}
