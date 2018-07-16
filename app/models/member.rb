class Member < ApplicationRecord
  has_many :users,
  foreign_key: :user_id,
  class_name: :User,
  primary_key: :id

  has_many :workspaces,
  foreign_key: :workspace_id,
  class_name: :Workspace,
  primary_key: :id
end
