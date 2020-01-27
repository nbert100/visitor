class Api::V1::VisitsController < ApplicationController

    def index
        # if params[:place_id]
        #     place = Place.find_by_id(params[:place_id])
        #     render json: place.visits
        # else
        #     visits = Visit.all 
        #     render json: visits, only: [:venue, :visitor]
        # end
        visits = Visit.all 
        render json: visits, status: 200
    end

    def show
        set_visit
        render json: visit
    end

    def create
        # place = Place.find_or_create_by(city: place_params[:city])
        visit = place.visits.build(visit_params)
        if visit.save
            render json: visit, include: :place, status: 200
        #  else
        #      render json: {errors: visit.errors.full_messages}
        end
    end

    # def update
    #     set_visit
    #     if visit.update(visit_params)
    #         render json: visit
    #         #flash message
    #     else
    #         render json: { errors: visit.errors.full_messages }
    #     end
    # end

    def destroy
        set_visit
        visit.destroy
        render json: ("Trip successfully deleted!")
        #flash message
    end

    private

    def set_visit
        visit = Visit.find_by_id(params[:id])
    end

    # def place_params
    #     params.require(:place).permit(:city, :country)
    # end

    def visit_params
        params.require(:visit).permit(:venue, :visitor, :when_visited, :visited, :comment, :place_id)
    end
end
