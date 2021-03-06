
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
        this.placeForm.addEventListener("submit", this.createPlace.bind(this))
        this.placesContainer.addEventListener("click", this.handleSeeVisitsButton.bind(this))
        this.placesContainer.addEventListener("click", this.handleAddVisitButton.bind(this))
        this.placesContainer.addEventListener("submit", this.createPlaceVisit.bind(this))
       }
  
        createPlace(e) {
            e.preventDefault()
            const place = {
                city: this.newCity.value,
                country: this.newCountry.value
            }
            this.placeAdapter.createPlace(place)
                .then(place => {
                    if (place.errors) {
                        this.renderErrors(place.errors)
                    }
                    else {
                    this.places.push(new Place(place))
                    this.newCity.value = ""
                    this.newCountry.value = ""
                    this.render()
           } 
        })
            
        }

            
        createPlaceVisit(e) {
            e.preventDefault()
                const visit = {
                venue: e.target.querySelector("#venue").value,
                visitor: e.target.querySelector("#visitor").value,
                when_visited: e.target.querySelector("#when_visited").value,
                comment: e.target.querySelector("#comment").value,
                place_id: e.target.getAttribute("data-place-id")
            }
            this.visitAdapter.createVisit(visit)
            .then(visit => {
                if (visit.errors) {
                    this.renderErrors(visit.errors)
                } else {
                const place = this.places.find(place => place.id === visit.place.id)
                place.visits.push(visit)
                this.render()
                }
            })

        }
           

    handleSeeVisitsButton(e) {
        if (e.target.className === "index-visit-button") {
            const bu = e.target.id
            const placeId = bu.split("_")[2]
            const x = document.getElementsByClassName("visit-div")[placeId - 1];            
            if (x.style.display === "none") { 
                x.style.display = "block";
            } else { x.style.display = "none"; } 
        }  
    }

    handleAddVisitButton(e) {
        if (e.target.className === "new-visit-button"){
            const bu = e.target.id
            const placeId = bu.split("_")[2]
            Place.renderNewPlaceVisitForm(placeId);
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

    renderErrors(errors) {
        alert(errors.join(" "))
    }

    render() {    
        this.placesContainer.innerHTML = this.places.map(place => place.renderPlace()).join("")
    }

    
}