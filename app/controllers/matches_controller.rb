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

    # def my_matches
    #     matches = [];
    #     user = User.find(params[:id])
    #     Match.all.where(user_1_id: user.id).each {|x| if (x.match_check) then matches << x end}
    #     Match.all.where(user_2_id: user.id).each {|x| if (x.match_check) then matches << x end}
    #     render json: matches, status: :ok 
    # end

    private

    def match_params
        params.permit(:user_id, :target, :swipe)
    end

end
