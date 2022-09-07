class MatchesController < ApplicationController
    
    def show
        match = Match.find(params[:id])
        render json: match, status: :ok
    end

    def index
        render json: Match.all
    end

    def create
        match = Match.create!(match_params)
        render json: match, status: :created
    end

    def update
        match = Match.find(params[:id])
        match.update!(match_params)
        render json: match, status: :ok
    end

    private

    def match_params
        params.permit(:user_1_match, :user_2_match, :user_1_id, :user_2_id)
    end

end
