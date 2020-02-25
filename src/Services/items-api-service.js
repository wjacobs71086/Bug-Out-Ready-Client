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
  createNewItem(item_name, url, img, description, est_cost, bag_id){

    console.log(item_name, url, img, description, est_cost, bag_id.bag_id )
    return fetch(`${config.API_ENDPOINT}/items`, {
      method: `POST`,
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({item_name, url, img, description, est_cost, bag_id})
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      );
  }
}

export default ItemsApiService;
