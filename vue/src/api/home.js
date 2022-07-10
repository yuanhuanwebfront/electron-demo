import request from '../request';

export function getTopSong(type = 0){

  return request({
    method: 'get',
    url: '/top/song',
    params: {
      type
    }
  })

}