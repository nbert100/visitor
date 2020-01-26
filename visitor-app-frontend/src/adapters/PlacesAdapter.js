// only job is to communicate with api/backends
class PlacesAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/api/v1/places"
    }

    getPlaces() {
        return fetch(this.baseURL)
        .then(res => res.json())
    }

    createPlace(cityValue, countryValue) {

        const place = {
            city: cityValue,
            country: countryValue
        }

        return fetch(this.baseURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // "Accept": "application/json"
            },
            body: JSON.stringify({ place })
        })
        .then(res => res.json())
    }

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

// adapter = new PlacesAdapter()
// const 