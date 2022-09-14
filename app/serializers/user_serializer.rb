class UserSerializer < ActiveModel::Serializer
  attributes :id, :avatar, :name, :age, :gender, :sexuality, :location, :bio, :email#, :username, :password
end
