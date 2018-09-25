class Resolvers::CreateChannelMember < GraphQL::Function
  argument :channel_id, !types.ID
  argument :user_id, !types.ID

  type Types::MemberType

  def call(_obj, args, _ctx)
    Member.create!(
      channel_id: args[:channel_id],
      user_id: args[:user_id]
    )
  end
end