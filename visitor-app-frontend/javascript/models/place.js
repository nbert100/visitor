class Place {
    constructor(placeJSON) {
        this.id = placeJSON.id
        this.city = placeJSON.city
        this.country = placeJSON.country
        this.visits = placeJSON.visits
    }

    
    renderPlaceVisits(){
        return this.visits.map(visit => `<ul>${visit.venue} with ${visit.visitor}</ul>`).join("")
        //  return `
        // <ul>
        //     ${this.visits.map(visit => {
        //         return `<li>${visit.venue}</li>`
        //     }).join("")}
        // </ul>
        // `   
        }
        
    

    // renderNewPlaceVisitForm(){
    //     return `
    //     <form data-id=${this.id}>
    //     `
    // }


    renderPlaceHeader() {

        return `<h3>${this.city}, ${this.country}</h3>`
    }

    renderPlace(){
        return `
            ${this.renderPlaceHeader()}
           ${this.renderPlaceVisits()}            
        `
    }
}