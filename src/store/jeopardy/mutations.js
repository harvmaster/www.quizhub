/*
export function someMutation (state) {
}
*/
import { Cookies } from 'quasar'

export async function generateUUID (state) {
  const uuid = Math.random().toString(36).substr(2, 8)
  state.user.uuid = uuid
  Cookies.set('user', state.user)
  return uuid
}

export function getUUIDFromCookie (state) {
  const user = Cookies.get('user')
  if (!user) return generateUUID(state)
  state.user.uuid = user.uuid
  return user.uuid
}
