class Visit {
    constructor(visitJSON) {
        this.id = visitJSON.id
        this.venue = visitJSON.venue
        this.date = visitJSON.when_visited
        this.comment = visitJSON.comment
        this.visitor = visitJSON.visitor 
        this.place_id = visitJSON.place_id
        //this.visited = visitJSON.visited
    }

    set place_id(pId) {
        this._place_id = pId;
    }

    template() {
        return `<li> ${this.venue} with ${this.visitor} on ${this.date}<br>
        </br>
        </li>`
    }
}