class Member < ApplicationRecord
  has_many :users,
  class_name: :User,
  foreign_key: :user_id,
  primary_key: :id

  has_many :workspaces,
  class_name: :Workspace,
  foreign_key: :workspace_id,
  primary_key: :id
end
