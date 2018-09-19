class Types::MemberType < Types::BaseObject
  field :id, ID, null: false
  field :user_id, ID, null: false
  field :workspace_id, ID, null: false
end