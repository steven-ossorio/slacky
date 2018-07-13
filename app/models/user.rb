class User < ApplicationRecord
  validates :username, length: { minimum: 5 }
  validates :email_address, unique: true
  
end
