import config from '../config'
import TokenService from './token-service';

const ItemsApiService = {
  getThings() {
    return fetch(`${config.API_ENDPOINT}/items`, {
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
  getThing(itemId) {
    
    return fetch(`${config.API_ENDPOINT}/${itemId}`, {
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
  createNewItem(bag_id, item_name, url, img, description, est_cost){
    return fetch(`${config.API_ENDPOINT}/bag-home/${bag_id}`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(bag_id, item_name, url, img, description, est_cost)
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      );
  }
}

export default ItemsApiService;
