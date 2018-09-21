module Types
  WorkspaceType = GraphQL::ObjectType.define do
    name 'Workspace'
    
    field :id, !types.ID
    field :user_id, !types.ID
    field :name, !types.String
    field :channels, types[Types::ChannelType]
  end
end