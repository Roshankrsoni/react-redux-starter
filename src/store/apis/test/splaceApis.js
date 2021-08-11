import { URL, key } from '../../../constants/test'

export const deleteClientUser = (uuid) => `/api/admin/client/${uuid}/user`
export const getGroupPermissionUsers = '/api/permission/users'

// Test Splace Image API
export const getImages = (page) => {
  return `${URL}/?client_id=${key}&per_page=14&page=${page}`
}
