class UserSerializer < ActiveModel::Serializer
  attributes :id, :avatar, :name, :age, :gender, :sexuality, :location, :bio, :email
  attributes :user_matches 
  #, :username, :password
  # has_many :matches, serializer: MatchSerializer

  def user_matches
    matches = []
    matches.concat(Match.all.where(user_1_id: object.id))
    matches.concat(Match.all.where(user_2_id: object.id))
    return matches
  end

end
