class UserSerializer < ActiveModel::Serializer
  attributes :id, :avatar, :name, :age, :gender, :sexuality, :location, :bio, :email, :user_matches#, :username, :password
  
  def user_matches
    return Match.all.where(user_1_id: object.id)
  end

end
