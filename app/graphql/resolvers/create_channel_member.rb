class Resolvers::CreateChannelMember < GraphQL::Function
  argument :channel_id, !types.ID

  type Types::MemberType

  def call(_obj, args, ctx)
    Member.create!(
      channel_id: args[:channel_id],
      user: ctx[:current_user]
    )
  end
end