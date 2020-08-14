import api from './api-helper'

export const readOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`)
  return resp.data;
}
export const readAllUsers = async () => {
  const resp = await api.get(`/users/`)
  return resp.data;
}
export const putUser = async (id, userData) => {
  const resp = await api.put(`/users/${id}`, { user: userData })
  return resp.data;
}

export const deleteUser = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp;
}