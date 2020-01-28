
class Places {
    constructor() {
        this.places = []
        this.adapter = new PlacesAdapter()
        // this.initBindingsAndEventListeners()
        this.fetchAndLoadPlaces()
    }

    //  initBindingsAndEventListeners() {
    //      this.placesContainer = document.getElementById("places-container");
    //     // this.visitVenue = document.getElementById("venue");
    //     // this.visitWhen = document.getElementById("when_visited");
    //     // this.visitVisitor = document.getElementById("visitor");
    //     // this.visitComment = document.getElementById("comment");
    //     // this.visitForm = document.getElementById("new-visit-form");
    //     // this.visitForm.addEventListener("submit", this.createPlaceVisit.bind(this))
    // }
    // createPlaceVisit(e) {
    //     e.preventDefault()
    //     const visit = {
    //         venue: this.visitVenue.value,
    //         visitor: this.visitVisitor.value,
    //         when_visited: this.visitWhen.value,
    //         comment: this.comment.value

    //     }
    //     this.adapter.createVisit(visit)
    //     .then(visit => {
    //         this.visit.push(new Visit(visit))
    //         this.render()
    //     })

    //  }

    // handlePlaceSingleClick(e) {
    //     const li = e.target
    //     console.log(li.id)
        
       
    // }

    fetchAndLoadPlaces() {
        this.adapter.getPlaces()
        .then(places => {
            places.forEach(place => this.places.push(new Place(place)))
        })
        .then(() => { this.render() })
    }

    render() {    
        this.placesContainer.innerHTML = this.places.map(place => place.renderPlace()).join("")
    }
}