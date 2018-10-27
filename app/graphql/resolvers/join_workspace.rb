class Resolvers::JoinWorkspace < GraphQL::Function
  argument :name, !types.String

  type Types::WorkspaceType

  def call(_obj, args, ctx)
    workspace = Workspace.find_by(name: args[:name])
    channel = workspace.channels.where(name: "General").first

    Member.create!(
      workspace_id: workspace.id,
      user: ctx[:current_user]
    )

    Member.create!(
      channel: channel,
      user: ctx[:current_user]
    )

    workspace
  end
end