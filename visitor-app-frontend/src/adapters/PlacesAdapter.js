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

    createVisit(venueValue, dateValue, commentValue, visitorValue, placeValue) {
        const visit = {
            venue: venueValue,
            when_visited: dateValue,
            comment: commentValue,
            visitor: visitorValue,
            place_id: placeValue
        }
            //visited?
        return fetch(this.baseURL + "/visits", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ visit })
        }).then(res => res.json());
    }

}

 