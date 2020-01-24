class Place {
    constructor(placeJSON) {
        this.id = placeJSON.id
        this.city = placeJSON.city
        this.country = placeJSON.country
    }

    renderLi() {

        return `<li>${this.city}, ${this.country}</li>`
    }
}