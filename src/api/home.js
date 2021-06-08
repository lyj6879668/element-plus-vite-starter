import getApi from './apiList'
import http from '@/utils/http'

export function getList(data) {
  return http({
    url: getApi('getList'),
    method: 'get',
    params: data
  })
}


