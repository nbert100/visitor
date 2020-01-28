// only job is to communicate with api/backends
class PlacesAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/"
    }

    getPlaces() {
        return fetch(this.baseUrl + 'places').then(res => res.json())
    }

    getPlace(id) {
        return fetch(this.baseUrl + "places/" + id)
        .then(res => res.json());
    }
   

    getPlaceVisits(id) {
        return fetch(this.baseUrl + "/places/" + id + "/visits")
        .then(res => res.json());
    }

    

}

 