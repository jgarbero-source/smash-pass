class Match < ApplicationRecord
    validates :user_1_id, :user_2_id, presence: true
    belongs_to :user
end
