class Resolvers::CreateWorkspace < GraphQL::Function
  argument :name, !types.String

  type Types::WorkspaceType

  def call(_obj, args, ctx)
    # User creates a new workspace.
    workspace = Workspace.create!(
      name: args[:name],
      user: ctx[:current_user]
    )

    # Default General channel is created.
    channel = Channel.create!(
      name: "General",
      workspace_id: workspace.id
    )

    # New User joins the Workspace.
    Member.create!(
      workspace_id: workspace.id,
      user: ctx[:current_user]
    )

    # New User joins the general channel upon joining.
    Member.create!(
      channel_id: channel.id,
      user: ctx[:current_user]
    )

    workspace
  end
end