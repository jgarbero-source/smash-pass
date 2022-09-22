class UserSerializer < ActiveModel::Serializer
  attributes :id, :avatar, :name, :age, :gender, :sexuality, :location, :bio, :email, :love_is_in_the_air
  #, :username, :password
  has_many :matches

  def love_is_in_the_air
    people = []
    actual_matches = []
    for match in object.matches
      if (match.swipe)
        people << match.target
      end
    end
    for x in people
      person = User.find(x)
      for y in person.matches
        if((y.target === object.id) && (y.swipe))
          actual_matches << person
        end
      end
    end
    return actual_matches
  end
end
