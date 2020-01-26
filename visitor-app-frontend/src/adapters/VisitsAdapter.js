class VisitsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/visits"
    }

    getVisits() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }

    createVisit(venueValue, dateValue, commentValue, visitorValue, placeValue) {
        const newVisit = {
            venue: venueValue,
            when_visited: dateValue,
            comment: commentValue,
            visitor: visitorValue,
            place_id: placeValue
            //visited?
        }

        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ newVisit }),
        })
        .then(res => res.json())
    }

}