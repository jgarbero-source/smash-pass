class User < ApplicationRecord
    #has_secure_password
    validates :age, :name,  presence: true
    # :email, :username, :password,
    # has_many :matches
end
