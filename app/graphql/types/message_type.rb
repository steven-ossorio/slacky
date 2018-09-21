 module Types
  MessageType = GraphQL::ObjectType.define do
    name 'Message'
    
    field :id, !types.ID
    field :user_id, !types.ID
    field :channel_id, !types.ID
    field :text, !types.String
  end
end