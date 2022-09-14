class User < ApplicationRecord
    has_secure_password
    validates :age, :name, :email, :username, :password,  presence: true
end
