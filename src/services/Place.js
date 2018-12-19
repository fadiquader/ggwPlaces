import axios from 'axios';

const API_URL = 'http://18.216.232.214:4000/api';

export class Place {

  static fetchAllPlaces() {
    return axios.get(`/location/all`)
  }
  static addPlace(data) {
    return axios.post('/location/create', data)
  }
  // static fetchPlaceById() {
  //   return axios.get(`/location/all`)
  // }
}

// Places.fetchAllPlaces()
