import getApi from './apiList'
import http from '@/utils/http'

export function login(data) {
  return http({
    url: getApi('login'),
    method: 'get',
    params: data
  })
}