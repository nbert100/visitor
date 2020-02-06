class Place {
    constructor(placeJSON) {
        this.id = placeJSON.id
        this.city = placeJSON.city
        this.country = placeJSON.country
        this.visits = placeJSON.visits
        
    }

    
    renderPlaceVisits(){
         return `
         <div class="visit-div" id="visit-div-${this.id}">${this.visits.map(visit => 
                `
                <ul>${visit.venue} with ${visit.visitor} on ${visit.when_visited}</ul>
                <p>"${visit.comment}"</p> 
                `
         ).join("")}</div>
           `   
         }
        
    renderVisitButton() {
        return `<button type="button" class="index-visit-button" id="index_visit_${this.id}"> See Visits</button>`
        
    }

    renderNewVisitButton() {
        return `<button type="button" class="new-visit-button" id="new_visit_${this.id}"> New Visit </button>`
    }

    static renderNewPlaceVisitForm(placeId) {
        const visitFormContainer = document.getElementById(`place-${placeId}`)
        const visitForm = document.createElement("form")
        visitForm.setAttribute('data-place-id', placeId)
        visitForm.innerHTML = `
        Venue: <input type="text" name="venue" id="venue" required>
        <br>
        Travel Buddy: <input type="text" name="visitor" id="visitor" required>
        <br>
        When: <input type="date" name="when_visited" id="when_visited">
        <br>
        Comment: <input type="text" name="comment" id="comment">
        <br>
        <input type="submit" value="Add Visit">
        </form>  
        `
        visitFormContainer.appendChild(visitForm)
    }


    renderPlaceHeader() {
        return `
        <h4 data-id=${this.id} data-class="place-header">
        ${this.city}, ${this.country} ${this.renderVisitButton()} ${this.renderNewVisitButton()} 
        </h4>
        `
    }


    renderPlace() {
        
        return `
        <div id="place-${this.id}">
            ${this.renderPlaceHeader()}
            ${this.renderPlaceVisits()}
        </div>             
        `
    }
}