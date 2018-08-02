class Member < ApplicationRecord
  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id,
  primary_key: :id

  belongs_to :workspace,
  class_name: :Workspace,
  foreign_key: :workspace_id,
  primary_key: :id
end
