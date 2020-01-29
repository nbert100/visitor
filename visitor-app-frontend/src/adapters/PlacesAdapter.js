// only job is to communicate with api/backends
class PlacesAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/places"
    }

    getPlaces() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    // getPlace(id) {
    //     return fetch(this.baseUrl + id)
    //     .then(res => res.json());
    // }
   

    // getPlaceVisits(id) {
    //     return fetch(this.baseUrl + id + "/visits")
    //     .then(res => res.json());
    // }

    createPlace(city_value, country_value) {
        const place = {
            city: city_value,
            country: country_value
        }
        return fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ place })
        })
        .then(res=> res.json)
    }

}

 