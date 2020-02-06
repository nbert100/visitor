class Api::V1::PlacesController < ApplicationController

    def create
        place = Place.new(place_params)
        if place.save
            render json: place, include: :visits
        else
            render json: { errors: place.errors.full_messages }, status: 422
        end        
    end
    
    def index
        places = Place.all 
        render json: places, include: :visits, status: 200
    end

    def show
        place = Place.find_by_id(params[:id])
        render json: place, status: 200
    end

    private
    

    def place_params
        params.require(:place).permit(:city, :country)
    end

end
