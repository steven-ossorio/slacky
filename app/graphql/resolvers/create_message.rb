class Resolvers::CreateMessage < GraphQL::Function
  argument :channel_id, !types.ID
  argument :text, !types.String

  type Types::MessageType

  def call(_obj, args, ctx)
    Message.create!(
      channel_id: args[:channel_id],
      text: args[:text],
      user: ctx[:current_user]
    )
  end
end