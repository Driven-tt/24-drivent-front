import useAsync from '../useAsync';
import useToken from '../useToken';

import * as reservationApi from '../../services/reservationApi';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function useReservation() {
  const token = useToken();
  const { userData } = useContext(UserContext);

  const {
    data: reservationData,
    loading: reservationLoading,
    error: reservationError,
    act: getReservation
  } = useAsync(() => reservationApi.get(userData.user.id, token));

  return {
    reservationData,
    reservationLoading,
    reservationError,
    getReservation
  };
}
