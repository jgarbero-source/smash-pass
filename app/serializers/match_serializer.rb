class MatchSerializer < ActiveModel::Serializer
  attributes :id, :user_id :target, :swipe
  belongs_to :user

  # def match_check
  #   return (object.user_1_match && object.user_2_match)
  # end
end
