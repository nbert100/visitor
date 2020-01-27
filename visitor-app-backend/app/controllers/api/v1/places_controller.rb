class Api::V1::PlacesController < ApplicationController

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
