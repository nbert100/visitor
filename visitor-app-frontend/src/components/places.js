
class Places {
    constructor() {
        this.places = []
        this.placeAdapter = new PlacesAdapter()
        this.visitAdapter = new VisitsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadPlaces()
        
    }

       initBindingsAndEventListeners() {
        this.placesContainer = document.getElementById("places-container")
        this.newCity = document.getElementById("new-city")
        this.newCountry = document.getElementById("new-country")
        this.placeForm = document.getElementById("new-place-form")
        this.visitDiv = document.getElementById("visits-container")

        this.placeForm.addEventListener("submit", this.createPlace.bind(this))
        this.placesContainer.addEventListener("click", this.handleSeeVisitsButtonClick.bind(this))
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
            this.placeAdapter.createPlace(place)
                .then(place => {
                    this.places.unshift(new Place(place))
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


    handleSeeVisitsButtonClick(e) {
        
        if (this.visitDiv.style.display ==="none") {
            
            this.visitDiv.style.display ="block";
        } else {
            this.visitDiv.style.display = "none";
        }
        // if (e.target.className === "index-visit-button"){
        //     console.log(e.target.className)
        //   const bu = e.target.id
        //   const placeId = bu.split("_")[2]
        //   this.places[placeId].renderPlaceVisits()
          
        // }
        
       
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