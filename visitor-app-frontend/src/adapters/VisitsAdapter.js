class VisitsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/visits"
    }

    getVisits() {
        return fetch(this.baseUrl)
        .then(res => res.json());
    }

    createVisit(visit) {
        return fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ visit })
        })
        .then(res => res.json());
    }
    
}