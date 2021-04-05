import { Cookies } from 'quasar'

// Generates a UUID for the user and will set it in the store
export async function generateUUID (state) {
  const uuid = Math.random().toString(36).substr(2, 8)
  state.user.uuid = uuid
  Cookies.set('user', state.user)
  return uuid
}

// Legacy, just in case i need this. Should be replaced by getUserFromCookie instead. Currently not used
export function getUUIDFromCookie (state) {
  const user = Cookies.get('user')
  if (!user) return generateUUID(state)
  state.user.uuid = user.uuid
  return user.uuid
}

// Sets the username of the user in the store
export function setUsername (state, payload) {
  state.user.username = payload.username
  Cookies.set('user', state.user)
  return state.user
}

// Will get the user information from the cookie, if the user does not have a uuid, will generate one
export function getUserFromCookie (state) {
  const user = Cookies.get('user')
  if (!user) generateUUID(state)
  state.user = user
  return user
}
