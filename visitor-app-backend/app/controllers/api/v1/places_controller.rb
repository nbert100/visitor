class Api::V1::PlacesController < ApplicationController
    def index
        places = Place.all 
        render json: places, include: :visits, status: :ok
    end

    def show
        set_place
        render json: @place, status: :ok
    end

    def new
    end

    def create
        place = Place.new(place_params)
        if place.save
            render json: @place, status: 201
        else 
            render json: {errors: @place.errors.full_messages}
        end
    end

    private
    def set_place
        @place = Place.find_by_id(params[:id])
    end

    def place_params
        params.require(:place).permit(:city, :country)
    end
end
