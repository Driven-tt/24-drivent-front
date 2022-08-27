import useAsync from '../useAsync';
import useToken from '../useToken';

import * as reservationApi from '../../services/reservationApi';

export default function useSaveReservation() {
  const token = useToken();

  const {
    loading: saveReservationLoading,
    error: saveReservationError,
    act: saveReservation
  } = useAsync((data) => reservationApi.save(data, token), false);

  return {
    saveReservationLoading,
    saveReservationError,
    saveReservation
  };
}
