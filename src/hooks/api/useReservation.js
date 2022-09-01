import useAsync from '../useAsync';
import useToken from '../useToken';

import * as reservationApi from '../../services/reservationApi';

export default function useReservation() {
  const token = useToken();

  const {
    loading: reservationLoading,
    error: reservationError,
    act: getReservation
  } = useAsync((data) => reservationApi.get(data, token), false);

  return {
    reservationLoading,
    reservationError,
    getReservation
  };
}
