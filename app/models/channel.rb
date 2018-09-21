class Channel < ApplicationRecord
  validates :name, presence: true

  belongs_to :workspace,
  foreign_key: :workspace_id,
  class_name: :Workspace,
  primary_key: :id

  has_many :messages,
  class_name: :Message,
  foreign_key: :channel_id,
  primary_key: :id

  has_many :memberships,
  class_name: :Member,
  foreign_key: :channel_id,
  primary_key: :id

  has_many :members, through: :memberships, source: :user
end
