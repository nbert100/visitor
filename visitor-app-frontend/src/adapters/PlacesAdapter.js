// only job is to communicate with api/backends
class PlacesAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/api/v1/places"
    }

    getPlaces() {
        return fetch(this.baseURL).then(res => res.json()
        )
    }
}

// adapter = new PlacesAdapter()
// const 