import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function usePayment() {
  const token = useToken();

  const {
    loading: paymentLoading,
    error: paymentError,
    act: getPayment
  } = useAsync((data) => paymentApi.get(data, token), false);

  return {
    paymentLoading,
    paymentError,
    getPayment
  };
}
