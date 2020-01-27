// only job is to communicate with api/backends
class PlacesAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/api/v1"
    }

    getPlaces() {
        return fetch(this.baseURL + "/places")
        .then(res => res.json());
    }

    getPlace(id) {
        return fetch(this.baseURL + "/places/" + id)
        .then(res => res.json());
    }

    getVisits() {
        return fetch(this.baseURL + "/visits")
        .then(res => res.json());
    }

    getPlaceVisits(id) {
        return fetch(this.baseURL + "/places/" + id + "/visits")
        .then(res => res.json());
    }

    // createPlace(cityValue, countryValue) {

    //     const place = {
    //         city: cityValue,
    //         country: countryValue
    //     }

    //     return fetch(this.baseURL, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             // "Accept": "application/json"
    //         },
    //         body: JSON.stringify({ place })
    //     })
    //     .then(res => res.json())
    // }

    // updatePlace(cityValue, countryValue, id) {
    //     const place = {
    //         city: cityValue,
    //         country: countryValue
    //     }

    //     return fetch(`${this.baseURL}/id`, {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json",
    //             // "Accept": "application/json"
    //         },
    //         body: JSON.stringify({ place })
    //     })
    //     .then(res => res.json())

    // }




}

 