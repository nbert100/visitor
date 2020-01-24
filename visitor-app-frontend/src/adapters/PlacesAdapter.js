// adapters talk to backend
class PlacesAdapter {
    constructor() {
        this.baseURL = "http://localhost:8080/api/v1"
    }

    getPlaces() {
        return fetch(this.baseURL).then(res => res.json()
        )
    }
}

// adapter = new PlacesAdapter()
// const 