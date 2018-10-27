class Resolvers::CreateWorkspaceMember < GraphQL::Function
  argument :name, !types.String

  type Types::WorkspaceType

  def call(_obj, args, ctx)
    workspace = Workspace.find_by(name: args[:name])
    channel = workspace.channel.where(name: "General")

    Member.create!(
      workspace_id: workspace.id,
      user: ctx[:current_user]
    )

    Member.create!(
      channel_id = channel.id,
      user: ctx[:current_user]
    )

    workspace
  end
end