class User < ApplicationRecord
  validates :username, length: { minimum: 5 }, presence: true
  validates :email_address, uniqueness: true, presence: true
end
