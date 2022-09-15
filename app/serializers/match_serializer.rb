class MatchSerializer < ActiveModel::Serializer
  attributes :id, :user_1_match, :user_2_match, :user_1_id, :user_2_id, :match_check

  def match_check
    return (object.user_1_match && object.user_2_match)
  end
end
