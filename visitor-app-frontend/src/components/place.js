class Place {
    constructor(placeJSON) {
        this.id = placeJSON.id
        this.city = placeJSON.city
        this.country = placeJSON.country
        this.visits = placeJSON.visits
        
    }

    
    renderPlaceVisits(){
         return `<ul>${this.visits.map(visit => {
                return `
                <li>${visit.venue}</li>
                `
            }).join("")}</ul>
           `   
         }
        
    renderVisitButton() {
        return `<button type="button" class="index-visit-button" id="index_visit_${this.id}"> See Visits</button>`
    }

    renderNewVisitButton() {
        return `<button type="button" class="new-visit-button" id="new_visit_${this.id}"> New Visit </button>`
    }

    renderNewPlaceVisitForm(placeId) {
        const visitFormContainer = document.getElementById(`place-${placeId}`)
        const visitForm = document.createElement("form")
        visitForm.setAttribute('data-place-id', placeId)
        visitForm.innerHTML = `
        Venue: <input type="text" name="venue" id="venue">
        <br>
        Travel Buddy: <input type="text" name="visitor" id="visitor">
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
        ${this.city}, ${this.country} ${this.renderVisitButton()} 
        </h4>
        `
    }



    renderPlace() {
        return `
        <div id="place-${this.id}">
            ${this.renderPlaceHeader()}
            ${this.renderNewVisitButton()}
                        
        </div>             
        `
    }
}