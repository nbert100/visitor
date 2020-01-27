
class Places {
    constructor() {
        this.places = [];
        this.adapter = new PlacesAdapter();
        this.initBindingsAndEventListeners();
        this.fetchAndLoadPlaces();
    }

    initBindingsAndEventListeners() {
        this.placesContainer = document.getElementById("places-container");
        this.visitVenue = document.getElementById("venue");
        this.visitWhen = document.getElementById("when_visited");
        this.visitVisitor = document.getElementById("visitor");
        this.visitComment = document.getElementById("comment");
        this.visitForm = document.getElementById("new-visit-form");
        this.visitForm.addEventListener("submit", this.createPlaceVisit.bind(this))
        this.placesContainer.addEventListener("click", event => {
            this.handlePlaceSingleClick)
        //     this.placeId = event.target.dataset.id;
        //     this.selectPlace(this.placeId);
        //     this.fetchAndLoadVisits(this.placeId);
        // )}
        //this.visitForm.addEventListener("submit", this.createPlaceVisit.bind(this))
        //}
        // this.body = document.querySelector("body")
        // this.newPlaceCity = document.getElementById("new-city")
        // this.newPlaceCountry = document.getElementById("new-country")
        // this.placeForm = document.getElementById("new-place-form")
        // this.placeForm.addEventListener("submit", this.createPlace.bind(this))
        //this.placesContainer.addEventListener("dblclick", this.handlePlaceClick.bind(this))
        //this.body.addEventListener("blur", this.updatePlace.bind(this), true) //if statement to trigger blur event only when intended (does event.target have a specific className??)
        //event listener for form submit will be attached to placesContainer - data should be taken from event.target
        //this.placesContainer.addEventListener("submit", this.handleVisitFormSubmit)
    }

    // createPlace(e) {
    //     e.preventDefault()
    //     const place = {
    //         city: this.newPlaceCity.value,
    //         country: this.newPlaceCountry.value
    //     }

    //     this.adapter.createPlace(place).then(place => {
    //         this.places.push(new Place(place))
    //         this.newPlaceCity.value = ""
    //         this.newPlaceCountry.value = ""
    //         this.render()
    //     })
    // }

    createPlaceVisit(e){
        e.preventDefault()
        const visit = {
            venue: this.visitVenue.value,
            visitor: this.visitVisitor.value,
            when_visited: this.visitWhen.value,
            comment: this.comment.value

        }
        this.adapter.createVisit(visit)
        .then(visit => {
            this.visit.push(new Visit(visit))
            this.render()
        })

     }

    handlePlaceSingleClick(e) {
        const li = e.target
        console.log(li.id)
        
       
    }

    fetchAndLoadPlaces() {
        this.adapter.getPlaces()
        .then(places => {
            places.forEach(place => this.places.push(new Place(place)))
            // console.log(this.places)
        })
        .then(() => {
            this.render()
        })
    }

    render() {    
        this.placesContainer.innerHTML = this.places.map(place => place.renderPlace()).join("")
    }
}