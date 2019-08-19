import axios from 'axios'
import getToken from './token'

function request(method, url, data){
  return axios({ method, url, data });
}

export default {
  async searchMovie(query){
    var title = query.split(' ').join('@')
    const apiToken = await getToken
    var url = `http://localhost:8080/api/find/${title}/${apiToken}`
    var method = "get"
    return request(method, url)
  },
  async getRank(){
    const apiToken = await getToken
    var url = `http://localhost:8080/api/rank/${apiToken}`
    var method = "get"
    return request(method, url)
  }
}