class Api::V1::PlacesController < ApplicationController
    def index
        places = Place.all 
        render json: places, include: :visits
    end
end
