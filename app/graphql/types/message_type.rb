Types::MessageType = GraphQL::ObjectType.define do
  name 'Message'

  field :id, !types.ID
  field :channel_id, !types.ID
  field :text, !types.String
  field :created_at, !types.String
  field :postedBy, -> { Types::UserType }, property: :user
end