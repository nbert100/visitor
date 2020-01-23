class Api::V1::VisitsController < ApplicationController

    def index
        visits = Visit.all 
        render json: @visits, only: [:venue, :visitor], include: :place
    end

    def show
        set_visit
        render json: @visit
    end

    def new
    end

    def create
    end

    def update
    end

    def destroy
    end

    private

    def set_visit
        visit = Visit.find_by_id(params[:id])
    end

    def place_params
        params.require(:place).permit(:city, :country)
    end

    def visit_params
        params.require(:visit).permit(:venue, :visitor, :when_visited, :visited, :comment, :place_id)
    end
end
