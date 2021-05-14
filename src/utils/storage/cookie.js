import Cookie from 'js-cookie';
import settings from '@/settings'

export function getToken() {
  return Cookie.get(settings.tokenKey)
}

export function setToken(token) {
  return Cookie.set(settings.tokenKey, token);
}

export function removeToken() {
  return Cookie.remove(settings.tokenKey);
}
