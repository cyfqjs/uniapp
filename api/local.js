import request from '../utils/request.js'

export function getLocal(data){
	return request('/person/'+ data)
}