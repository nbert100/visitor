// meat of program
// set property of notes equal to empty array
// create notes adapter
//bind event listeners by invoking method
class Places {
    constructor() {
        this.places = []
        this.adapter = new PlacesAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadPlaces()
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
        const placesContainer = document.getElementById("places-container")
        placesContainer.innerHTML = this.places.map(place => `<li>${place.city}, ${place.country}</li>`).join('')
    }
}