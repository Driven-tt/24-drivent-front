import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const [ticketModality, setTicketModality] = useState({ type: null, price: null });
  const [accommodationModality, setAccommodationModality] = useState({ type: null, price: null });
  const [paymentData, setPaymentData] = useLocalStorage('paymentData', null);

  function selectModality(modality) {
    if(modality.type !== 'presential' && modality.type !== 'online') return;
    if(modality.type === 'online') setAccommodationModality({ type: null, price: null });
    setTicketModality(modality);
  }

  function selectAccommodationModality(modality) {
    if(modality.type !== 'withHotel' && modality.type !== 'withoutHotel') return;
    setAccommodationModality(modality);
  }

  return (
    <PaymentContext.Provider 
      value={{ 
        paymentData, 
        setPaymentData, 
        ticketModality, 
        accommodationModality, 
        selectModality, 
        selectAccommodationModality 
      }}>
      {children}
    </PaymentContext.Provider>
  );
}
