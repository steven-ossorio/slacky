module Types
  MemberType = GraphQL::ObjectType.define do
    name 'Member'
    
    field :id, !types.ID
    field :user_id, !types.ID
    field :workspace_id, !types.ID
  end
end