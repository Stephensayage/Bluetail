import api from './api-helper'

export const readAllListings = async () => {
  const resp = await api.get('/listings')
  return resp.data;
}

export const readOneListing = async (id) => {
  const resp = await api.get(`/listings/${id}`)
  return resp.data;
}

export const postListing = async (listingData) => {
  const resp = await api.post(`/listings/`, { listing: listingData })
  return resp.data;
}

export const putListing = async (id, listingData) => {
  const resp = await api.put(`/listings/${id}`, { listing: listingData })
  return resp.data;
}

export const deleteListing = async (id) => {
  const resp = await api.delete(`/listings/${id}`)
  return resp;
}

export const addAgent = async (listingId, userId) => {
  const resp = await api.put(`/listings/${listingId}/users/${userId}`)
  return resp.data;
}

export const deleteAgent = async (listingId, userId) => {
  const resp = await api.put(`/users/${userId}/listings/${listingId}`)
  return resp.data;
}
