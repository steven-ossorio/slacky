Types::MemberType = GraphQL::ObjectType.define do
  name 'Member'
  
  field :id, !types.ID
  field :workspace_id, !types.ID
  field :user, -> { Types::UserType }, property: :user
  field :channel, -> { Types::ChannelType }, property: :channel
end