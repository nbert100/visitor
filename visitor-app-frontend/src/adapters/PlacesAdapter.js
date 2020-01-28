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

    getVisits() {
        return fetch(this.baseUrl + "visits")
        .then(res => res.json());
    }

    getPlaceVisits(id) {
        return fetch(this.baseUrl + "/places/" + id + "/visits")
        .then(res => res.json());
    }

    createVisit(visit) {
        // const visit = {
        //     venue: venueValue,
        //     when_visited: dateValue,
        //     comment: commentValue,
        //     visitor: visitorValue,
        //     place_id: placeValue
        // }
            //visited?
        return fetch(this.baseUrl + "visits", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ visit }),
        }).then(res => res.json());
    }

}

 