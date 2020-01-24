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
        this.adapter.getNotes().then(places => {
            console.log(places)
        })
    }
}