class Resolvers::CreateChannel < GraphQL::Function
  argument :workspace_id, !types.ID
  argument :name, !types.String

  type Types::ChannelType

  def call(_obj, args, _ctx)
    Channel.create!(
      workspace_id: args[:workspace_id],
      name: args[:name]
    )
  end
end