
class Places {
    constructor() {
        this.places = []
        this.placeAdapter = new PlacesAdapter()
        this.visitAdapter = new VisitsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadPlaces()
        console.log("hello")
    }

       initBindingsAndEventListeners() {
        this.placesContainer = document.getElementById("places-container")
        this.newCity = document.getElementById("new-city")
        this.newCountry = document.getElementById("new-country")
        this.placeForm = document.getElementById("new-place-form")
        this.placeForm.addEventListener('click', this.createPlace.bind(this))
        // this.addEventListener("click", this.handlePlaceSingleClick())
//     //     // this.visitVenue = document.getElementById("venue");
//     //     // this.visitWhen = document.getElementById("when_visited");
//     //     // this.visitVisitor = document.getElementById("visitor");
//     //     // this.visitComment = document.getElementById("comment");
//     //     // this.visitForm = document.getElementById("new-visit-form");
//     //     // this.visitForm.addEventListener("submit", this.createPlaceVisit.bind(this))
             }


             createPlace(e) {
                e.preventDefault()
                 const place = {
                     city: this.newCity.value,
                     country: this.newCountry.value
                 }

                 this.placeAdapter.createPlace(city, country)
                 .then(place => {
                     this.places.push(new Place(place))
                     this.render()
                 })
             }

            
//     // createPlaceVisit(e) {
//     //     e.preventDefault()
//     //     const visit = {
//     //         venue: this.visitVenue.value,
//     //         visitor: this.visitVisitor.value,
//     //         when_visited: this.visitWhen.value,
//     //         comment: this.comment.value

//     //     }
//     //     this.adapter.createVisit(visit)
//     //     .then(visit => {
//     //         this.visit.push(new Visit(visit))
//     //         this.render()
//     //     })

//     //  }


    handleSeeVisitsButton(e) {
        if (e.target.className === "index-visit-button"){
          const bu = e.target.id
          const placeId = bu.split("_")[2]
          Place.renderPlaceVisits
        console.log("clicked")  
        }
        
       
    }

    fetchAndLoadPlaces() {
        this.placeAdapter.getPlaces()
        .then(places => {
            places.forEach(place => this.places.push(new Place(place)))
        })
        .then(() => {
             this.render() 
            })
            
    }

    render() {    
        this.placesContainer.innerHTML = this.places.map(place => place.renderPlace()).join("")
    }
 }