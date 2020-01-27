//const app = new App()
document.addEventListener("DOMContentLoaded", init)
    // fetch("http://localhost:3000/api/v1/places")
    // .then(res => res.json())
    // .then(data => console.log(data));
    function init() {
        getPlaces();
        //Api.getVisits():
        submitVisitForm();
        //resetForm();
    }
  
    baseUrl = "http://localhost:3000"

    getVisits() {
        fetch(Api.baseUrl + "/api/v1/visits")
        .then(res => res.json())
        .then(visits => {
            visits.forEach(visit => {
            let newVisit = new Visit(visit.venue, visit.when_visited, visit.comment, visit.visitor, visit.place_id);
            })
            Visit.renderAll();
        })
    }

    getPlaces() {
        fetch(Api.baseUrl + "/api/v1/places")
            .then(res => res.json())
            .then(places => {
                places.forEach(place => {
                    let newPlace = new Place(place.city, place.country);
                })
            })
    }

    static createVisit(e) {
        e.preventDefault();
        let data = createData();
        fetch(Api.baseUrl + "/api/v1/visits", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            let visit_place = Place.findOrCreate(data.place.city, data.place.country);
            let visit = new Visit(data.venue, data.when_visited, data.comment, data.visitor, visit_place)
            visit.display();
        })
    }

function createData() {
    return {
        visit: {
            venue: document.getElementById("venue").value,
            when_visited:
            comment:
            visitor:
        },
        place: {
            city: document.getElementById("city").value,
            country: document.getElementById("country").value
        }
    }
}

// function resetForm() {
//     document.getElementById
// }

function submitVisitForm() {
    document.getElementById("visit-form").addEventListener("submit", Api.createVisit)
}