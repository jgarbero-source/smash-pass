class UserSerializer < ActiveModel::Serializer
  attributes :id, :avatar, :age, :gender, :sexuality, :location, :bio
end
