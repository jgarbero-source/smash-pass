class MatchSerializer < ActiveModel::Serializer
  attributes :id, :user_1_match, :user_2_match, :user_1_id, :user_2_id
end
