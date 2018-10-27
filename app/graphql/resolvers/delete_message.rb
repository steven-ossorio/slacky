class Resolvers::DeleteMessage < GraphQL::Function
  argument :id, !types.ID

  def call(_obj, args, ctx)
    message = Message.find(args[:id])

    if message.user_id == ctx[:current_user].id
      message.destroy
    end

    message
  end
end