// meat of program
// set property of notes equal to empty array
// create notes adapter
//bind event listeners by invoking method
class Places {
    constructor() {
        this.places = []
        this.adapter = new PlacesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadPlaces()
    }

    initBindingsAndEventListeners() {
        this.placesContainer = document.getElementById("places-container")
        this.newPlaceCity = document.getElementById("new-city")
        this.newPlaceCountry = document.getElementById("new-country")
        this.placeForm = document.getElementById("new-place-form")
        this.placeForm.addEventListener("submit", this.createPlace.bind(this))
    }

    createPlace(e) {
        e.preventDefault()
        // const city_value = this.newPlaceCity.value
        // const country_value = this.newPlaceCountry.value
        // this.adapter.createPlace(city_value, country_value)
        const place = {
            city: this.newPlaceCity.value,
            country: this.newPlaceCountry.value
        }
        this.adapter.createPlace(place).then(place => {
            this.places.push(new Place(place))
            this.newPlaceCity.value = ""
            this.newPlaceCountry.value = ""
            this.render()
        })
    }

    fetchAndLoadPlaces() {
        this.adapter
        .getPlaces()
        .then(places => {
            places.forEach(place => this.places.push(new Place(place)))
            console.log(this.places)
        })
        .then(() => {
            this.render()
        })
    }

    render() {    
        this.placesContainer.innerHTML = this.places.map(place => place.renderLi()).join("")
    }
}