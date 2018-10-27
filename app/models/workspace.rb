class Workspace < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id,
  primary_key: :id

  has_many :memberships,
  class_name: :Member,
  foreign_key: :workspace_id,
  primary_key: :id

  has_many :channels,
  class_name: :Channel,
  foreign_key: :workspace_id,
  primary_key: :id

  has_many :members, through: :memberships, source: :user
end
