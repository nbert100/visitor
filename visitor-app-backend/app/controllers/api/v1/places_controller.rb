class Api::V1::PlacesController < ApplicationController

    def index
        places = Place.all 
        render json: places, include: :visits, status: 200
    end

    def show
        set_place
        render json: place, status: 200
    end

    def create
        place = Place.new(place_params)
        if place.save
            render json: place, status: 200
         else 
            render json: { errors: place.errors.full_messages }
        end
    end

    def update
        set_place
        if place.update(place_params)
            render json: place
            #flash message
        else
            render json: { errors: place.errors.full_messages }
        end
    end

    def destroy
        set_place
        place.destroy
        render json: {placeId: place.id}
    end

    private
    def set_place
        place = Place.find_by_id(params[:id])
    end

    def place_params
        params.require(:place).permit(:city, :country)
    end
end
