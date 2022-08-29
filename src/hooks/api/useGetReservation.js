import useAsync from '../useAsync';
import useToken from '../useToken';

import * as reservationApi from '../../services/reservationApi';

export default function useGetReservation() {
  const token = useToken();

  const {
    loading: getReservationLoading,
    error: getReservationError,
    act: getReservation
  } = useAsync((data) => reservationApi.get(data, token), false);

  return {
    getReservationLoading,
    getReservationError,
    getReservation
  };
}
