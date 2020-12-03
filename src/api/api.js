import { stringify } from 'qs';
import request from '@/utils/request';

export async function crgMessage(params) {
  return request(`http://api.tianapi.com/cba/index?${stringify(params)}`);
}
