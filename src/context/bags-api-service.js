import config from '../config'
import TokenService from './token-service';

const BagsApiService = {
  getThings() {
    return fetch(`${config.API_ENDPOINT}/bags`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getThing(bagId) {
    return fetch(`${config.API_ENDPOINT}/${bagId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }

}

export default BagsApiService;