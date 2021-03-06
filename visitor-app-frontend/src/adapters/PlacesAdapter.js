// only job is to communicate with api/backends
class PlacesAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/places"
    }

    getPlaces() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createPlace(place) {
        
        return fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ place })
        })
        .then(res=> res.json())
    }

}

 