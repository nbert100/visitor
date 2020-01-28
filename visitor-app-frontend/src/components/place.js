// class Place {
//     constructor(placeJSON) {
//         this.id = placeJSON.id
//         this.city = placeJSON.city
//         this.country = placeJSON.country
//         this.visits = placeJSON.visits
        
//     }

    
//     renderPlaceVisits(){
//         const visitsContainer = document.getElementById("visit-container")
//         return this.visits.map(visit => `<ul class="visit">${visit.venue} with ${visit.visitor}</ul>`).join("")
//         //  return `
//         // <ul>
//         //     ${this.visits.map(visit => {
//         //         return `<li>${visit.venue}</li>`
//         //     }).join("")}
//         // </ul>
//         // `   
//         }
        
//     renderVisitButton(){
//         return `<button class="visit-button" id="index_visit_${this.id}"> See Visits</button>`
//     }

//     handleButtonClick() {
        
//     }

//     renderNewPlaceVisitForm(){
//         //place.id === this.id
//         return `
//         <form data-id=${this.id} id="new-visit-form"> <div id="new-visit-container">
//         <form id="new-visit-form">
//           <input type="hidden" id="visit-id">
//         <label for="venue">Venue:</label>
//         <input type="text" name="venue" id="venue">
//         <br>
//         <label for="city">Travel Buddy:</label>
//         <input type="text" name="visitor" id="visitor">
//         <br>
//         <label for="when_visited">When:</label>
//         <input type="date" name="when_visited" id="when_visited">
//         <br>
//         <label for="comment">Comment:</label>
//         <input type="text" name="comment" id="comment">
//         <br>
//         <input type="submit" value="Add Visit">
//         </form>  
//         `
//     }


//     renderPlaceHeader() {

//         return `<h4 data-place-id=${this.id}>${this.city}, ${this.country}</h4>`
//     }

//     renderPlace() {
//         return `
//             ${this.renderPlaceHeader()}
                     
//         `
//     }
// }