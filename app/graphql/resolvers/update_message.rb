class Resolvers::UpdateMessage < GraphQL::Function
  argument :id, !types.ID
  argument :text, !types.String

  type Types::MessageType

  def call(_obj, args, ctx)
    message = Message.find(args[:id])

    if message.user_id == ctx[:current_user].id
      message.update(text: args[:text])
    end

    message
  end
end