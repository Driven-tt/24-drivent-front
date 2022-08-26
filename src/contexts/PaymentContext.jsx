import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const [ticketModality, setTicketModality] = useState(null);
  const [accommodationModality, setAccommodationModality] = useState(null);
  const [paymentData, setPaymentData] = useLocalStorage('paymentData', null);

  function selectModality(modality) {
    if(modality !== 'presential' && modality !== 'online') return;
    setTicketModality(modality);
  }

  function selectAccommodationModality(modality) {
    if(modality !== 'withHotel' && modality !== 'withoutHotel') return;
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
