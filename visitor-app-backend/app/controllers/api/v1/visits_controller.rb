class Api::V1::VisitsController < ApplicationController

    def index
        if params[:place_id]
            visits = Place.find_by_id(params[:place_id]).visits
        else
            visits = Visit.all 
        end
         render json: visits, only: [:venue, :when_visited], include: :place, status: 200
    end

    def show
        set_visit
        render json: visit, only: [:venue, :visitor, :when_visited, :comment]
    end

    def create
        visit = Visit.new(visit_params)
        if visit.save
            render json: visit, include: :place, status: 200
        else
            render json: { errors: visit.errors.full_messages }, status 422
        end
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
