import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext.js';

export default function usePayment() {
  const token = useToken();
  const { userData } = useContext(UserContext);

  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: getPayment
  } = useAsync(() => paymentApi.get(userData.user.id, token));

  return {
    payment,
    paymentLoading,
    paymentError,
    getPayment
  };
}
