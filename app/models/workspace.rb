class Workspace < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :memberships,
  class_name: :Member,
  foreign_key: :workspace_id,
  primary_key: :id

  has_many :channels,
  class_name: :Channel,
  foreign_key: :workspace_id,
  primary_key: :id

<<<<<<< HEAD
  has_many :channels,
  class_name: :Channel,
  foreign_key: :workspace_id,
  primary_key: :id

=======
>>>>>>> 7829a44ef8c65ea243e413ae6c4a53a729acac5c
  has_many :members, through: :memberships, source: :user
end
