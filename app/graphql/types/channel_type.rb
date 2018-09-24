module Types
  ChannelType = GraphQL::ObjectType.define do
    name 'Channel'
    
    field :id, !types.ID
    field :workspace_id, !types.ID
    field :name, !types.String
    field :members, types[Types::UserType]
    connection :messages, MessageType.connection_type
  end
end