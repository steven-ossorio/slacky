class Workspace < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :members,
  class_name: :Member,
  foreign_key: :workspace_id,
  primary_key: :id
end
