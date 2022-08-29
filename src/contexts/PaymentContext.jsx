import { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import UserContext from './UserContext';

export const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const { userData } = useContext(UserContext);
  const [ticketModality, setTicketModality] = useState({ type: null, price: null });
  const [accommodationModality, setAccommodationModality] = useState({ type: null, price: null });
  const [paymentData, setPaymentData] = useLocalStorage(null);
  const [cardInfos, setCardInfos] = useState({
    cardNumber: null,
    cardName: null,
    cardExpiration: null,
    cardCv: null,
  });
  const [paymentConfirm, setPaymentConfirm] = useLocalStorage(false);

  function selectModality(modality) {
    if (modality.type !== 'presential' && modality.type !== 'online') return;
    if (modality.type === 'online') setAccommodationModality({ type: null, price: null });
    setTicketModality(modality);
  }

  function selectAccommodationModality(modality) {
    if (modality.type !== 'withHotel' && modality.type !== 'withoutHotel') return;
    setAccommodationModality(modality);
  }

  function reserveTicket() {
    //TODO chamar api e salvar os dados da reserva
    const newReserve = {
      userId: userData.user.id,
      modality: ticketModality.type,
      modalityPrice: ticketModality.price,
      withAccommodation: accommodationModality.type !== null,
      accommodationModality: accommodationModality.price || 0,
    };

    alert('INGRESSO RESERVADO !');
    setPaymentData(newReserve);
  }

  function processPayment() {
    //TODO: chamar api para salvar dados do pagamento
    //const newCardPayment = { ...cardInfos };
    alert('PAGAMENTO CONFIRMADO !');
    setPaymentConfirm(true);
  }

  return (
    <PaymentContext.Provider
      value={{
        paymentData,
        setPaymentData,
        ticketModality,
        accommodationModality,
        paymentConfirm,
        cardInfos,
        setCardInfos,
        selectModality,
        selectAccommodationModality,
        reserveTicket,
        processPayment,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
