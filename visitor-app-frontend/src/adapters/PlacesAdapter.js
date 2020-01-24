// only job is to communicate with api/backends
class PlacesAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/api/v1/places"
    }

    getPlaces() {
        return fetch(this.baseURL).then(res => res.json()
        )
    }

    createPlace(city_value, country_value) {
        const place = {
            city: city_value,
            country: country_value
        }
        return fetch(this.baseURL, {
            method: 'POST'
            city: JSON.stringify({ place: city })
            country: JSON.stringify()
        })
    }
}

// adapter = new PlacesAdapter()
// const 