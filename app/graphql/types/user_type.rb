module Types
  UserType = GraphQL::ObjectType.define do
    name 'User'
    
    field :id, !types.ID
    field :username, !types.String
    field :email, !types.String, property: :email_address
    field :workspaces, types[Types::WorkspaceType]
  end
end