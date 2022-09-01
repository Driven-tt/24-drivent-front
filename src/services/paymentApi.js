import api from './api';

export async function save(body, token) {
  const response = await api.post('/payments', body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

export async function get(userId, token) {
  const response = await api.get(`/payments/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

