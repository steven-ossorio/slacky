Types::UserType = GraphQL::ObjectType.define do
  name 'User'

  field :id, !types.ID
  field :username, !types.String
  field :email, !types.String
  # Want to return an array of workspaces current_user is associated with.
  field :workspaces, -> { !types[Types::WorkspaceType] }
end