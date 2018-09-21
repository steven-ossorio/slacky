module Types
  WorkspaceType = GraphQL::ObjectType.define do
    name 'Workspace'
    
    field :id, !types.ID
    field :user_id, !types.ID
    field :name, !types.String
    field :members, types[Types::UserType]
  end
end