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
    return fetch(`${config.API_ENDPOINT}/bag-home/${bagId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  },
  getBagsItems(bagId) {
    return fetch(`${config.API_ENDPOINT}/bag-home/${bagId}`, {
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
  createNewBag(bag_name, situations) {
    console.log(bag_name);
    return fetch(`${config.API_ENDPOINT}/situations`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(bag_name, situations)
    }).then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
      .then(res => res.bag_id);
  },
  deleteBag(bag_id){
    console.log('this is the id to delete',bag_id, 'and the type of', typeof bag_id);

    return fetch(`${config.API_ENDPOINT}/bags/${bag_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({id: bag_id})
    }).then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
}

export default BagsApiService;