Types::WorkspaceType = GraphQL::ObjectType.define do
  name 'Workspace'
  
  field :id, !types.ID
  field :name, !types.String
  field :channels, -> { types[Types::ChannelType] }
  field :createdBy, -> { Types::UserType }, property: :user
  field :members, -> { !types[Types::UserType] }
end