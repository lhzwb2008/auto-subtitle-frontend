import fetch from '@/utils/fetch'

export function getList(params) {
  try {
    var obj = fetch({
      url: '/table/list',
      method: 'get',
      params
    })
  } catch (error) {
    console.log(error)
  }
  return obj
}
