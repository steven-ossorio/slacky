class User < ApplicationRecord
  validates :username, length: { minimum: 5 }
  validates :email_address, uniqueness: true
  
end
